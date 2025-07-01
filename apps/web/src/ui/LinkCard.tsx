import Link from 'next/link'
import classNames from 'classnames'
import type { HTMLAttributeAnchorTarget } from 'react'
import styles from './LinkCard.module.css'

const LinkCard = ({
  text,
  title,
  href,
  icon,
  target,
}: {
  href: string
  title: string
  text: string
  icon?: string
  target?: HTMLAttributeAnchorTarget
}) => (
  <Link href={href} target={target} prefetch={false} className={styles.card}>
    {!!icon && (
      <div className={styles.iconContainer}>
        <span className={classNames(styles.icon, icon, 'fr-icon--lg')} />
      </div>
    )}
    <div className={styles.content}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    <div className={styles.arrowContainer}>
      {target === '_blank' ? (
        <span className="fr-icon-external-link-line" />
      ) : (
        <span className="fr-icon-arrow-right-line" />
      )}
    </div>
  </Link>
)
export default LinkCard
