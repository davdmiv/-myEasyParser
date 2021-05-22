import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'

const PublicRuleTable = observer(() => {
  const { rules } = useContext(Context)
  return <div></div>
})

export default PublicRuleTable
