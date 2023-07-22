'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  applyStructureFilter,
  StructureFilters,
} from '@app/web/components/Prefet/Cartographie/structureFilters'
import {
  DepartementCartographieData,
  DepartementCartographieDataCommune,
  DepartementCartographieDataStructure,
} from '@app/web/app/(cartographie)/prefet/[codeDepartement]/cartographie/getDepartementCartographieData'
import styles from './Page.module.css'
import Legend from './Legend'
import Map from './Map'

const Cartographie = ({
  data: { departement, structures, count, communes, epcis },
}: {
  data: DepartementCartographieData
}) => {
  const [selectedCommune, setSelectedCommune] = useState<
    DepartementCartographieDataCommune | null | undefined
  >()
  const [selectedStructure, setSelectedStructure] = useState<
    DepartementCartographieDataStructure | null | undefined
  >()

  const router = useRouter()

  const onCommuneSelected = useCallback(
    (codeCommune: string | undefined | null) => {
      if (codeCommune) {
        setSelectedStructure(null)
        setSelectedCommune(communes.find((c) => c.code === codeCommune))
      } else {
        setSelectedCommune(null)
      }
    },
    [communes],
  )

  const onStructureSelected = useCallback(
    (structure: string | undefined | null) => {
      if (structure) {
        setSelectedCommune(null)
        setSelectedStructure(
          structures.find((item) => item.properties.id === structure),
        )
      } else {
        setSelectedStructure(null)
      }
    },
    [structures],
  )

  // Prefetch dashboard page
  useEffect(() => {
    router.prefetch(`/prefet/${departement.code}`)
  }, [router, departement.code])

  const [filteredStructures, setFilteredStructures] = useState(structures)
  const onFilter = (filters: StructureFilters) => {
    setFilteredStructures(
      structures.filter((structure) =>
        applyStructureFilter(structure, filters),
      ),
    )
  }

  return (
    <div className={styles.container}>
      <Legend
        count={count}
        structures={structures}
        communes={communes}
        departement={departement}
        selectedCommune={selectedCommune}
        onCommuneSelected={onCommuneSelected}
        selectedStructure={selectedStructure}
        onStructureSelected={onStructureSelected}
        onFilter={onFilter}
      />
      <Map
        departement={departement}
        communes={communes}
        epcis={epcis}
        structures={structures}
        selectedCommune={selectedCommune}
        onCommuneSelected={onCommuneSelected}
        selectedStructure={selectedStructure}
        onStructureSelected={onStructureSelected}
        filteredStructures={filteredStructures}
      />
    </div>
  )
}

export default Cartographie
