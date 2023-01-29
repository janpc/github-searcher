import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Styles.module.css'
import { fetchRepos } from '@/redux/repos/fetchData';

import Header from '../components/Header'
import List from '../components/List'
import Loading from '../components/Loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isLoading, initialState, text, page, per_page } = useSelector(state => state.repos)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!initialState) {
      dispatch(fetchRepos({q: text, page, per_page}))
    }
  }, [text, page, per_page])

  return (
    <>
      <Head>
        <title>Github Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        { initialState && <p className={styles.searchTitle}>Search a repo...</p> }
        { isLoading && <Loading /> }
        { !initialState && !isLoading && <List /> }
      </main>
    </>
  )
}
