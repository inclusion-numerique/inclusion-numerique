import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import { modifierLesCommentairesAction } from './action'

export function useAdministrationGouvernances(
  ancienCommentaireSuivi: string,
  ancienProblemeIdentifie: string,
) {
  const router = useRouter()
  const [problemeIdentifie, setProblemeIdentifie] = useState(
    ancienProblemeIdentifie,
  )
  const [commentaireSuivi, setCommentaireSuivi] = useState(
    ancienCommentaireSuivi,
  )

  function mettreAJourLeCommentaireSuivi(
    event: FormEvent<HTMLTextAreaElement>,
  ) {
    setCommentaireSuivi(event.currentTarget.value)
  }

  function mettreAJourLeProblemeIdentifie(event: FormEvent<HTMLInputElement>) {
    setProblemeIdentifie(event.currentTarget.value)
  }

  function modifierLesCommentaires(idGouvernance: string) {
    return async () => {
      await modifierLesCommentairesAction(
        idGouvernance,
        commentaireSuivi,
        problemeIdentifie,
      )
      router.refresh()
    }
  }

  return {
    commentaireSuivi,
    problemeIdentifie,
    mettreAJourLeCommentaireSuivi,
    mettreAJourLeProblemeIdentifie,
    modifierLesCommentaires,
  }
}
