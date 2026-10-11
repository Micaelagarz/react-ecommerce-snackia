import style from './Section.module.css'

const Section = ({ children }) => {
    return <section className={style.verticalSpacing}>{children}</section>
};

export default Section;