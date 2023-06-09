import React from 'react'
import classNames from 'classnames'
import { Box as BoxType } from '../data'
import StatisticBox from './StatisticBox'
import styles from './Box.module.css'
import PercentageBox from './PercentageBox'

const Box = ({
  className,
  fullHeight,
  ...bloc
}: BoxType & { fullHeight?: boolean; className?: string }) => (
  <div
    className={classNames(className, styles.bloc, {
      [styles.fullHeight]: fullHeight,
    })}
  >
    {'value' in bloc ? <StatisticBox {...bloc} /> : <PercentageBox {...bloc} />}
  </div>
)

export default Box
