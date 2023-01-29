import styles from '@/styles/Styles.module.css'

export default function ListItem ({owner}) {
  return (
    <div className={styles.userInfo}>
      <img src={owner.avatar_url} alt={owner.login + ' avatar image'} className={styles.userImage}/>
      <span>{ owner.login }</span>
    </div>
  )
}