import { PropsWithChildren } from 'react'

import classNames from 'classnames'
import Button from '@codegouvfr/react-dsfr/Button'
import styles from './FullPageTwoColumnsWithIllustrationLayout.module.css'

/**
 * This layout is used for onboarding pages where the users are guided through a series of steps.
 * It is composed of two columns, the left one is scrollable and the right one is an illustration.
 * It is closed by a button in the top right corner.
 */
const FullPageTwoColumnsWithIllustrationLayout = ({
  illustrationBackground,
  illustrationSrc,
  illustrationMaxWidth,
  children,
  nextHref,
  nextLabel = 'Suivant',
  previousHref,
  stepIndex,
  totalSteps,
  title,
  titleClassName,
  contentClassname,
  closeHref,
}: PropsWithChildren<{
  illustrationBackground: 'blue-france-925-125' | 'blue-france-975-75'
  illustrationSrc: string
  illustrationMaxWidth: number | string
  // illustrationWidth: number
  title?: string
  titleClassName?: string
  contentClassname?: string
  stepIndex?: number
  totalSteps?: number
  previousHref?: string
  nextHref?: string
  nextLabel?: string
  closeHref: string
}>) => (
  <div className={styles.container}>
    <Button
      className={classNames(styles.closeButton, {
        [styles.mdBackgroundBlueFrance925125]:
          illustrationBackground === 'blue-france-925-125',
        [styles.mdBackgroundBlueFrance97575]:
          illustrationBackground === 'blue-france-975-75',
      })}
      iconId="fr-icon-close-line"
      priority="secondary"
      title="Fermer"
      linkProps={{
        href: closeHref,
      }}
    />
    {/* Content is half left part */}
    <div className={styles.left}>
      {/* Inner content div to be allow to center it horizontally */}
      <div className={styles.contentContainer}>
        <div className={classNames(styles.content, contentClassname)}>
          {!!stepIndex && !!totalSteps && (
            <p
              className={classNames(
                'fr-text-mention--grey fr-text--bold fr-text--sm fr-mt-8v fr-mt-md-10v fr-mb-0',
                styles.steps,
              )}
            >
              {stepIndex} SUR {totalSteps}
            </p>
          )}

          {!!title && (
            <h1 className={classNames('fr-h2', styles.title, titleClassName)}>
              {title}
            </h1>
          )}

          {children}
        </div>
        {/* Button are at the bottom to always be at same y */}
        <div className={styles.buttons}>
          {!!previousHref && (
            <Button
              iconId="fr-icon-arrow-left-line"
              title="Précédent"
              priority="secondary"
              linkProps={{
                href: previousHref,
              }}
            />
          )}
          {!!nextHref && (
            <Button
              iconId="fr-icon-arrow-right-line"
              iconPosition="right"
              linkProps={{
                href: nextHref,
              }}
            >
              {nextLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
    {/* Illustration is half right part */}
    <div
      className={classNames(
        'fr-hidden fr-unhidden-md',
        {
          [styles.illustrationBackgroundBlueFrance925125]:
            illustrationBackground === 'blue-france-925-125',
          [styles.illustrationBackgroundBlueFrance97575]:
            illustrationBackground === 'blue-france-975-75',
        },
        styles.right,
      )}
    >
      <div
        className={styles.illustrationWrapper}
        style={{
          width: illustrationMaxWidth,
          maxWidth: illustrationMaxWidth,
        }}
      >
        <img src={illustrationSrc} className={styles.illustration} alt="" />
      </div>
    </div>
  </div>
)

export default FullPageTwoColumnsWithIllustrationLayout
