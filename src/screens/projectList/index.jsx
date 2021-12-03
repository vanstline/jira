import { useState, useEffect } from 'react'
import { stringify } from 'qs'
import { SearchPanel } from './searchPanel'
import { List } from './list'
import { cleanObject } from 'utils'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [ param, setParam ] = useState({ name: '', personId: '' })
  const [ users, setUsers ] = useState([])
  const [ list, setList ] = useState([])

  useEffect(
    () => {
      fetch(`${apiUrl}/projects?${stringify(cleanObject(param))}`)
        .then(res => res.json())
        .then(res => setList(res))
    },
    [ param ]
  )

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(res => res.json()).then(res => setUsers(res))
  }, [])

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}
