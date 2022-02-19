import styles from '../components/common/StylesFormElements.module.scss';

export const ElementForm = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={(hasError ? styles.formControl : "")}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    );
};