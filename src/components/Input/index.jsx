import styles from './styles.module.scss'

const Input = ({ label, type, placeholder, dataForm, error }) => {
    return (
        <div className={styles.format_input}>
            <label className="headline" htmlFor={label}>{label}</label>
            <input type={type} placeholder={placeholder} {...dataForm} />
            {error ? <p className="errorMessage">{error.message}</p> : null}
        </div>
    )
}

export default Input


