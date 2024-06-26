import React from 'react'
import Button from '@codegouvfr/react-dsfr/Button'
import {
  DepartementCartographieDataCommune,
  DepartementCartographieDataStructure,
} from '@app/web/app/(cartographie)/donnees/departements/[codeDepartement]/cartographie/getDepartementCartographieData'
import CityDetails from '@app/web/components/Dashboard/Cartographie/CityDetails'
import StructureDetails from '@app/web/components/Dashboard/Cartographie/StructureDetails'
import styles from './MapPopup.module.css'

const MapPopup = ({
  commune,
  structure,
  close,
  dataUpdated,
}: {
  commune: DepartementCartographieDataCommune | null | undefined
  structure: DepartementCartographieDataStructure | null | undefined
  close: () => void
  dataUpdated: Date
}) => {
  if (!commune && !structure) {
    return null
  }

  return (
    <div className={styles.popup}>
      <div className={styles.close}>
        <Button
          priority="tertiary no outline"
          iconId="fr-icon-close-line"
          iconPosition="right"
          size="small"
          onClick={close}
          data-testid="map-popup-close-button"
        >
          Fermer
        </Button>
      </div>
      {!!commune && <CityDetails commune={commune} />}
      {!!structure && (
        <StructureDetails dataUpdated={dataUpdated} structure={structure} />
      )}
    </div>
  )
}

export default MapPopup
