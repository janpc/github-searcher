import {useSelector, useDispatch} from 'react-redux'
import styles from '@/styles/Styles.module.css'
import ListItem from '../ListItem'
import { Table, TablePagination, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { setItemsPerPage, setPage } from '@/redux/repos/reposSlice'

export default function List ( ) {
  const dispatch = useDispatch()
  const { data, page, per_page } = useSelector(state => state.repos)

  function handlePage (e, page) {
    dispatch(setPage(page))
  }

  function handleChangeRows (e) {
    dispatch(setItemsPerPage(parseInt(e.target.value, 10)));
  };

  return (
    <TableContainer component={Paper} className={styles.list}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Owner</TableCell>
            <TableCell align="center">Created</TableCell>
            <TableCell align="center">Last Update</TableCell>
            <TableCell align="center"size="small" >Topics</TableCell>
            <TableCell align="center">Language</TableCell>
            <TableCell align="center">Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.items?.map((repo) => (
            <ListItem
              key={repo.id}
              repo={repo}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={data?.total_count}
          rowsPerPage={per_page}
          page={page}
          onPageChange={handlePage}
          onRowsPerPageChange={handleChangeRows}
        />
    </TableContainer>
  )
}