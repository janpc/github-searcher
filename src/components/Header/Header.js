import {useSelector, useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styles from '@/styles/Styles.module.css'
import { setInitialState, setText } from '@/redux/repos/reposSlice';

export default function Header() {
  const { text } = useSelector(state => state.repos)
  const dispatch = useDispatch()
  let delayTimer = null

  function handleSearch(e) {
    const q = e.target.value

    if (delayTimer) {
      clearTimeout(delayTimer);
    }

    if (q === '') {
      dispatch(setInitialState(true))
    } else if (text !== q) {
      delayTimer = setTimeout(function() {
        dispatch(setInitialState(false))
        dispatch(setText(q))
      }, 200);
    }

  }

  return (
    <Box className={styles.header}>
      <p>
        GitHub Search
      </p>
      <TextField
        label="Search..."
        variant="outlined"
        className={styles.input}
        onChange={handleSearch}
      />
    </Box>
  )
}