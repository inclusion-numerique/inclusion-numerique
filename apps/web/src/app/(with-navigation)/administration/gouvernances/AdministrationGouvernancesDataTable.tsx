import Badge from '@codegouvfr/react-dsfr/Badge'
import React from 'react'
import Button from '@codegouvfr/react-dsfr/Button'
import {
  DataTableConfiguration,
  DataTableSearchParams,
} from '@app/web/data-table/DataTableConfiguration'
import { compareMultiple } from '@app/web/utils/compareMultiple'
import { getServerUrl } from '@app/web/utils/baseUrl'
import {
  detailGouvernancePath,
  gouvernanceHomePath,
} from '@app/web/app/(with-navigation)/gouvernances/gouvernancePaths'
import { numberToEuros } from '@app/web/utils/formatNumber'
import { dateAsIsoDay } from '@app/web/utils/dateAsIsoDay'
import type { AdministrationGouvernancesDataRow } from '@app/web/app/(with-navigation)/administration/gouvernances/getAdministrationGouvernances'
import {
  statutsAction,
  statutsDemandeSubvention,
  statutsMetadata,
} from '@app/web/gouvernance/statutDemandesSubvention'
import { compareFromArrayIndex } from '@app/web/utils/compareFromArrayIndex'

export const AdministrationGouvernancesDataTable = {
  csvFilename: () => `fne-${dateAsIsoDay(new Date())}-gouvernances`,
  rowKey: ({ departement }) => departement.code,
  defaultSortableInMemory: (a, b) =>
    a.departement.code.localeCompare(b.departement.code),
  rowInMemorySearchableString: (row) =>
    row.departement.searchable + (row.departement.region?.searchable ?? ''),
  columns: [
    {
      name: 'departement',
      header: 'Département',
      csvHeaders: ['Département', 'Nom'],
      csvValues: ({ departement: { code, nom } }) => [code, nom],
      cellAsTh: true,
      cell: ({ departement: { code, nom } }) => (
        <>
          {code}&nbsp;·&nbsp;{nom}
        </>
      ),
      defaultSortable: true,
    },
    {
      name: 'region',
      header: 'Région',
      csvHeaders: ['Région'],
      csvValues: ({ departement: { region } }) => [region?.nom ?? ''],
      cell: ({ departement: { region } }) => region?.nom ?? null,
      sortable: (a, b) =>
        (a.departement.region?.nom ?? '').localeCompare(
          b.departement.region?.nom ?? '',
        ),
    },
    {
      name: 'coporteurs',
      header: 'Coporteurs',
      csvHeaders: ['Coporteurs'],
      csvValues: ({ membresCounts }) => [membresCounts.coPorteurs],
      sortable: (a, b) =>
        compareMultiple(
          (a.gouvernance ? 1 : 0) - (b.gouvernance ? 1 : 0),
          a.membresCounts.coPorteurs - b.membresCounts.coPorteurs,
        ),
      cell: ({ gouvernance, membresCounts }) =>
        gouvernance ? (
          membresCounts.coPorteurs === 0 ? (
            <Badge small severity="info">
              Aucun&nbsp;co-porteur
            </Badge>
          ) : (
            membresCounts.coPorteurs
          )
        ) : (
          <Badge small severity="warning">
            Aucune&nbsp;gouvernance
          </Badge>
        ),
    },
    {
      name: 'membres',
      header: 'Membres',
      csvHeaders: ['Membres'],
      csvValues: ({ membresCounts }) => [membresCounts.total],
      cellClassName: 'fr-text--right',
      cell: ({ membresCounts }) => membresCounts.total || null,
      sortable: (a, b) =>
        compareMultiple(
          (a.gouvernance ? 1 : 0) - (b.gouvernance ? 1 : 0),
          a.membresCounts.total - b.membresCounts.total,
        ),
    },
    {
      name: 'feuilles-de-route',
      header: 'Feuilles de route',
      csvHeaders: ['Feuilles de route'],
      csvValues: ({ feuillesDeRoutesCount }) => [feuillesDeRoutesCount],
      cellClassName: 'fr-text--right',
      cell: ({ feuillesDeRoutesCount }) => feuillesDeRoutesCount || null,
      sortable: (a, b) => a.feuillesDeRoutesCount - b.feuillesDeRoutesCount,
    },
    {
      name: 'dotation-totale',
      header: 'Dotation totale',
      csvHeaders: ['Dotation totale'],
      csvValues: ({ dotationTotale }) => [dotationTotale.toNumber()],
      cellClassName: 'fr-text--right',
      cell: ({ dotationTotale }) => numberToEuros(dotationTotale),
      sortable: (a, b) => a.dotationTotale.sub(b.dotationTotale).toNumber(),
    },
    {
      name: 'dotation-ingenierie',
      header: 'Dotation ingénierie',
      csvHeaders: ['Dotation ingénierie'],
      csvValues: ({ dotationIngenierie }) => [dotationIngenierie.toNumber()],
      cellClassName: 'fr-text--right',
      cell: ({ dotationIngenierie }) => numberToEuros(dotationIngenierie),
      sortable: (a, b) =>
        a.dotationIngenierie.sub(b.dotationIngenierie).toNumber(),
    },
    {
      name: 'note-de-contexte',
      header: 'Note de contexte',
      csvHeaders: ['Note de contexte'],
      csvValues: ({ statutNoteDeContexte }) => [statutNoteDeContexte],
      cell: ({ statutNoteDeContexte }) =>
        statutNoteDeContexte === 'Enregistré' ? (
          <Badge small severity="success">
            {statutNoteDeContexte}
          </Badge>
        ) : (
          <Badge small severity="warning">
            {statutNoteDeContexte}
          </Badge>
        ),
      sortable: (a, b) =>
        compareMultiple(
          compareFromArrayIndex(
            a.statutNoteDeContexte,
            b.statutNoteDeContexte,
            statutsMetadata,
          ),
        ),
    },
    {
      name: 'subvention-formation',
      header: 'Subvention formation',
      csvHeaders: ['Subvention formation'],
      csvValues: ({ statutBeneficiaireFormation }) => [
        statutBeneficiaireFormation,
      ],
      cell: ({ statutBeneficiaireFormation }) =>
        statutBeneficiaireFormation === 'Accepté' ? (
          <Badge small severity="success">
            {statutBeneficiaireFormation}
          </Badge>
        ) : statutBeneficiaireFormation === 'À instruire' ? (
          <Badge small severity="new">
            {statutBeneficiaireFormation}
          </Badge>
        ) : (
          <Badge small severity="warning">
            {statutBeneficiaireFormation}
          </Badge>
        ),
      sortable: (a, b) =>
        compareMultiple(
          compareFromArrayIndex(
            a.statutBeneficiaireFormation,
            b.statutBeneficiaireFormation,
            statutsAction,
          ),
          a.demandesCounts.total - b.demandesCounts.total,
        ),
    },
    {
      name: 'beneficiaire-formation',
      header: 'Bénéficiaire formation',
      csvHeaders: ['Bénéficiaire formation'],
      csvValues: ({ beneficiaireFormationNom }) => [beneficiaireFormationNom],
      cell: ({ beneficiaireFormationNom }) => beneficiaireFormationNom || null,
      sortable: (a, b) =>
        (a.beneficiaireFormationNom ?? '').localeCompare(
          b.beneficiaireFormationNom ?? '',
        ),
    },
    {
      name: 'montant_ingenierie',
      header: 'Montant demandé ingenierie',
      csvHeaders: ['Montant demandé ingenierie'],
      csvValues: ({ montantDemande }) => [montantDemande.toNumber()],
      cellClassName: 'fr-text--right',
      cell: ({ montantDemande }) =>
        montantDemande.gt(0) ? numberToEuros(montantDemande) : null,
      sortable: (a, b) => a.montantDemande.sub(b.montantDemande).toNumber(),
    },
    {
      name: 'montant_formation',
      header: 'Montant demandé formation',
      csvHeaders: ['Montant demandé formation'],
      csvValues: ({ deduplicatedBeneficiairesCount }) => [
        deduplicatedBeneficiairesCount > 0 ? 20_000 : 0,
      ],
      cellClassName: 'fr-text--right',
      cell: ({ deduplicatedBeneficiairesCount }) =>
        deduplicatedBeneficiairesCount > 0 ? '20 000 €' : null,
      sortable: (a, b) => a.montantDemande.sub(b.montantDemande).toNumber(),
    },
    {
      name: 'beneficiaires',
      header: 'Bénéficiaires',
      csvHeaders: ['Bénéficiaires'],
      csvValues: ({ deduplicatedBeneficiairesCount }) => [
        deduplicatedBeneficiairesCount,
      ],
      cellClassName: 'fr-text--right',
      cell: ({ deduplicatedBeneficiairesCount }) =>
        deduplicatedBeneficiairesCount || null,
      sortable: (a, b) =>
        a.deduplicatedBeneficiairesCount - b.deduplicatedBeneficiairesCount,
    },
    {
      name: 'actions',
      header: 'Actions',
      csvHeaders: ['Actions'],
      csvValues: ({ demandesCounts }) => [demandesCounts.total],
      cellClassName: 'fr-text--right',
      cell: ({ demandesCounts }) => demandesCounts.total || null,
      sortable: (a, b) => a.demandesCounts.total - b.demandesCounts.total,
    },
    {
      name: 'en-cours',
      header: 'En cours',
      csvHeaders: ['En cours'],
      csvValues: ({ demandesCounts }) => [demandesCounts.enCours],
      cellClassName: 'fr-text--right',
      cell: ({ demandesCounts }) =>
        demandesCounts.enCours ? (
          <Badge small severity="info" noIcon>
            {demandesCounts.enCours}
          </Badge>
        ) : null,
      sortable: (a, b) => a.demandesCounts.enCours - b.demandesCounts.enCours,
    },
    {
      name: 'a-instruire',
      header: 'À instruire',
      csvHeaders: ['À instruire'],
      csvValues: ({ demandesCounts }) => [demandesCounts.aInstruire],
      cellClassName: 'fr-text--right',
      cell: ({ demandesCounts }) =>
        demandesCounts.aInstruire ? (
          <Badge small severity="new" noIcon>
            {demandesCounts.aInstruire}
          </Badge>
        ) : null,
      sortable: (a, b) =>
        a.demandesCounts.aInstruire - b.demandesCounts.aInstruire,
    },
    {
      name: 'acceptees',
      header: 'Acceptées',
      csvHeaders: ['Acceptées'],
      csvValues: ({ demandesCounts }) => [demandesCounts.acceptees],
      cellClassName: 'fr-text--right',
      cell: ({ demandesCounts }) =>
        demandesCounts.acceptees ? (
          <Badge small severity="success" noIcon>
            {demandesCounts.acceptees}
          </Badge>
        ) : null,
      sortable: (a, b) =>
        a.demandesCounts.acceptees - b.demandesCounts.acceptees,
    },
    {
      name: 'statut-demandes',
      header: 'Statut des demandes',
      csvHeaders: ['Statut des demandes'],
      csvValues: ({ statutDemandesSubvention }) => [statutDemandesSubvention],
      cell: ({ statutDemandesSubvention }) =>
        statutDemandesSubvention === 'Finalisé' ? (
          <Badge small severity="success">
            {statutDemandesSubvention}
          </Badge>
        ) : statutDemandesSubvention === 'En cours' ? (
          <Badge small severity="info">
            {statutDemandesSubvention}
          </Badge>
        ) : (
          <Badge small severity="warning">
            {statutDemandesSubvention}
          </Badge>
        ),
      sortable: (a, b) =>
        compareMultiple(
          compareFromArrayIndex(
            a.statutDemandesSubvention,
            b.statutDemandesSubvention,
            statutsDemandeSubvention,
          ),
          a.demandesCounts.total - b.demandesCounts.total,
        ),
    },
    {
      name: 'lien-instruire',
      header: null,
      csvHeaders: ['Instruire les demandes'],
      csvValues: ({ gouvernance, departement: { code } }) => [
        gouvernance
          ? getServerUrl(
              `/administration/gouvernances/${code}/demandes-de-subvention`,
            )
          : null,
      ],
      cell: ({ gouvernance, departement: { code } }) =>
        gouvernance ? (
          <Button
            size="small"
            linkProps={{
              href: `/administration/gouvernances/${code}/demandes-de-subvention`,
            }}
          >
            Instruire les demandes
          </Button>
        ) : null,
    },
    {
      name: 'lien-gouvernance',
      header: null,
      csvHeaders: ['Voir la gouvernance'],
      csvValues: ({ gouvernance, departement: { code } }) => [
        gouvernance
          ? getServerUrl(
              detailGouvernancePath({ codeDepartement: code }, gouvernance.id),
            )
          : null,
      ],
      cell: ({ gouvernance, departement: { code } }) =>
        gouvernance ? (
          <a
            className="fr-link fr-link--xs fr-ml-1v"
            href={detailGouvernancePath(
              { codeDepartement: code },
              gouvernance.id,
            )}
            target="_blank"
          >
            Voir la gouvernance
          </a>
        ) : null,
    },
    {
      name: 'vue-prefecture',
      header: null,
      cell: ({ gouvernance, departement: { code } }) =>
        gouvernance ? (
          <a
            className="fr-link fr-link--xs fr-ml-1v"
            href={gouvernanceHomePath({ codeDepartement: code })}
          >
            Vue préfecture
          </a>
        ) : null,
    },
  ],
} satisfies DataTableConfiguration<AdministrationGouvernancesDataRow>

export type AdministrationGouvernancesDataTableSearchParams =
  DataTableSearchParams<typeof AdministrationGouvernancesDataTable>
