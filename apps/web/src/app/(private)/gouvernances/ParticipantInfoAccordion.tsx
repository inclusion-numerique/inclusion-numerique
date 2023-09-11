import Accordion from '@codegouvfr/react-dsfr/Accordion'
import React from 'react'
import { CandidatsGouvernance } from '@app/web/app/(private)/gouvernances/getCandidatsGouvernances'
import InfoLabelValue from '@app/web/components/Gouvernance/InfoLabelValue'
import ContactInfo from '@app/web/components/Gouvernance/ContactInfo'
import { formulaireGouvernancePersonaName } from '@app/web/app/(private)/gouvernances/formulaireGouvernancePersonaName'
import styles from '@app/web/app/(private)/gouvernances/Gouvernances.module.css'

export type Participant =
  | CandidatsGouvernance['souhaitentParticiper']['collectivites'][number]
  | CandidatsGouvernance['souhaitentParticiper']['structures'][number]

const ParticipantInfoAccordion = ({
  participant,
}: {
  participant: Participant
}) => {
  const label = formulaireGouvernancePersonaName(participant)

  return (
    <Accordion label={label} className={styles.detailsAccordion}>
      {participant.contactPolitique && (
        <InfoLabelValue
          label="Contact politique :"
          value={<ContactInfo contact={participant.contactPolitique} />}
        />
      )}
      {participant.contactTechnique && (
        <InfoLabelValue
          label="Contact technique :"
          value={<ContactInfo contact={participant.contactTechnique} />}
        />
      )}
      {participant.contactStructure && (
        <InfoLabelValue
          label="Contact structure :"
          value={<ContactInfo contact={participant.contactStructure} />}
        />
      )}
    </Accordion>
  )
}

export default ParticipantInfoAccordion
