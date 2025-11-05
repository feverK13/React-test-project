import styles from '../../styles/Footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <p className={styles.socialsHeading}>
                    My socials
                </p>

                <div className={styles.socialsList}>
                    <a href="" className={styles.socialLink} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.996 1.771a10.486 10.486 0 0 0-3.314 20.438c.523.092.69-.216.69-.493c0-.25.005-.945 0-1.824c-2.919.633-3.522-1.381-3.522-1.381a2.78 2.78 0 0 0-1.163-1.534c-.952-.65.071-.638.071-.638a2.2 2.2 0 0 1 1.607 1.08a2.23 2.23 0 0 0 3.05.871c.05-.53.285-1.025.666-1.397c-2.328-.266-4.776-1.165-4.776-5.184a4.06 4.06 0 0 1 1.08-2.815a3.76 3.76 0 0 1 .103-2.774s.882-.282 2.883 1.076a9.9 9.9 0 0 1 5.252 0c2.007-1.357 2.881-1.076 2.881-1.076c.387.878.424 1.87.104 2.774a4.05 4.05 0 0 1 1.079 2.816c0 4.03-2.452 4.916-4.789 5.174a2.5 2.5 0 0 1 .718 1.933v2.904c0 .28.17.59.702.488a10.487 10.487 0 0 0-3.322-20.438" stroke-width="1.2"/></svg></a>
                    <a href="" className={styles.socialLink} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.2"><path d="M7 12.75a1.5 1.75 0 1 0 3 0a1.5 1.75 0 1 0-3 0m7 0a1.5 1.75 0 1 0 3 0a1.5 1.75 0 1 0-3 0"/><path stroke-linecap="round" d="M9.5 5.5S10.58 5 12 5s2.5.5 2.5.5L15 4c1.755 0 3.06.293 4.5 1c1 1.667 3 6.4 3 12c-1.864 1.924-3.304 2.736-5.5 3l-1.5-2.5c-.5.167-1.9.5-3.5.5s-3-.333-3.5-.5L7 20c-2.196-.264-3.636-1.076-5.5-3c0-5.6 2-10.333 3-12C5.94 4.293 7.245 4 9 4z"/><path stroke-linecap="round" d="M8.5 17.5c-1.086-.277-2-1-2-1m9 1c1.086-.277 2-1 2-1"/></g></svg></a>
                    <a href="" className={styles.socialLink} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.2"><path d="M1.5 3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M1.5 22.5v-14h4v14zM8 8.5v14h4v-6.908c0-1.092 1-3.092 3.895-3.092c1.643 0 2.605.845 2.605 2.5v7.5h4V15c0-1.309-.312-2.937-1.394-4.277c-1.144-1.417-2.913-2.223-5.21-2.223c-1.513 0-2.835.615-3.896 1.366V8.5z" clipRule="evenodd"/></g></svg></a>
                </div>
                
            </div>
            <p className={styles.copyRight}>
                &copy; 2025 All Rights are protected by mighty Fever Knight!
            </p>
        </footer>
    );
}