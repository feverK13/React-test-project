import emailjs from '@emailjs/browser'

import { useRef, useState } from 'react'

import creatorPhoto from '../assets/images/creator-pic.jpg'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'
import styles from '../styles/AboutUs.module.css'

export default function AboutUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const formRef = useRef()
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert('Будь ласка, заповніть всі поля')
      return
    }
    setIsLoading(true)

    emailjs
      .sendForm('service_guq3avb', 'template_z5257sq', formRef.current, '4G3Y-GzxavTlwpiqB')
      .then(result => {
        console.log(result.text)
        alert('Дякуємо за відгук!')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(error => {
        console.log(error.text)
        alert('Сталася помилка. Будь ласка, повторіть пізніше. . .')
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUsHeader}>
        <h1 className={styles.headerTitle}>Про Arete та її творця</h1>
        <p className={styles.headerSubtitle}>
          Як пристрасть до ігор та бажання розвиватись стали одним цілим
        </p>
      </div>

      <div className={styles.aboutUsStory}>
        <h2 className={styles.storyTitle}>Історія Arete</h2>
        <div className={styles.storyContent}>
          <article className={styles.storyBlock}>
            <h3 className={styles.storySubtitle}>Що запалило ідею?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur odio
              earum impedit incidunt necessitatibus laudantium deserunt officiis reprehenderit!
              Ipsa, quibusdam vitae? Nobis deleniti id nostrum dolorem vel totam cupiditate
              architecto atque incidunt sed iure facilis, quis tempore saepe numquam itaque
              perferendis.
            </p>
          </article>
          <article className={styles.storyBlock}>
            <h3 className={styles.storySubtitle}>Від концепції до реалізації</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi animi ipsa voluptatem
              aperiam officiis iste tempore adipisci amet. Similique ullam ipsam voluptas ab,
              excepturi, ipsa totam culpa sapiente tempore expedita repudiandae doloremque
              dignissimos nihil dolore autem nemo!
            </p>
          </article>
          <article className={styles.storyBlock}>
            <h3 className={styles.storySubtitle}>Що буде потім?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero, rem repellat
              inventore blanditiis cupiditate reprehenderit ad veritatis necessitatibus architecto
              fugit placeat voluptatibus id, in quisquam! Impedit commodi, sed consequuntur aliquam,
              sunt minima ullam possimus consequatur odit, culpa ea!
            </p>
          </article>
        </div>
      </div>

      <div className={styles.aboutUsCreator}>
        <h2 className={styles.creatorTitle}>Знайомтесь з творцем</h2>
        <div className={styles.creatorCard}>
          <img src={creatorPhoto} alt='Creators photo' className={styles.creatorPic} />
          <div className={styles.cardContent}>
            <h3 className={styles.creatorName}>Крушельницький Ігор</h3>
            <p className={styles.creatorInfo}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id libero incidunt optio,
              aut neque, expedita commodi dignissimos sint ab facilis reiciendis laboriosam aliquid
              odit! Dignissimos ea, repellendus in maiores ullam, eligendi molestias harum, optio
              aspernatur libero distinctio labore cupiditate. Soluta saepe praesentium aut enim nemo
              aspernatur voluptates cupiditate adipisci unde, et reprehenderit consectetur, aperiam
              ea odio similique earum vitae itaque. Ducimus nobis quo omnis et distinctio, eius illo
              praesentium dicta debitis!
            </p>
            <div className={styles.creatorQuote}>
              <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'>
                <path
                  fill='#131313'
                  d='M13.222 3H23v10l-4 7h-3l3-7h-5.778zM1 3h9.778v10L7 20H4l3-7H1z'
                />
              </svg>
              <p className={styles.quote}>Bla bla bla, any txt dropped from somewhere. . .</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.feedbackWrapper}>
        <section className={styles.feedbackSection}>
          <div className={styles.feedbackHeading}>
            <h2 className={styles.feedbackTitle}>
              Маєте ідею? Знайшли баг чи все настільки чудово, що вирішили поділитись враженнями?
            </h2>
            <p className={styles.feedbackSubtitle}>Заповнюйте форму, я читаю кожен відгук</p>
          </div>
          <form className={styles.feedbackForm} ref={formRef} onSubmit={handleSubmit}>
            <Input
              className={styles.inputName}
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше ім'я"
            />
            <Input
              className={styles.inputEmail}
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Ваш Email'
            />
            <textarea
              className={`${styles.formInput} ${styles.inputMessage}`}
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Ваше повідомлення...'
            />
            <Button disabled={isLoading} children='Надіслати' />
          </form>
        </section>
      </div>
    </div>
  )
}
