import moment from 'moment';
import UserInfo from '../UserInfo';
import {TableCell, TableRow} from '@mui/material';

export default function ListItem ({repo}) {
  const { id, name, html_url, owner, created_at, updated_at, topics, language, stargazers_count } = repo
  function openURL (url) {
    window.open(url)
  }
  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
      href={html_url}
      onClick={()=> openURL(html_url)}
      hover
      selected
    >
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="center">
          <UserInfo owner={owner}/>
        </TableCell>
        <TableCell align="right">
          {moment().utc(created_at).format('MMMM Do YYYY')}
        </TableCell>
        <TableCell align="right">
          {moment().utc(updated_at).format('MMMM Do YYYY')}
        </TableCell>
        <TableCell align="center">
          {topics.length ? topics.map((t, i) => i < topics.length - 1 ? t + ', ' : t) : '-'}
        </TableCell>
        <TableCell align="center">{language || '-' }</TableCell>
        <TableCell align="center">{stargazers_count}</TableCell>
    </TableRow>
  )
}