import '../styles/AboutUs.css';
import creatorPhoto from '../assets/images/creator-pic.jpg'

export default function AboutUsPage() {
    return (
    <div className='aboutUsBody'>
        <header>
            <h1 className='header-title'>Про Arete та її творця</h1>
            <p className='header-subtitle'>Як пристрасть до ігор та бажання розвиватись стали одним цілим</p>
        </header>

        <main>
            <div className='story-section'>
                <h2 className='story-title'>Історія Arete</h2>
                <div className='story-content'>
                    <article className='story-block'>
                        <h3 className='story-subtitle'>Що запалило ідею?</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, aspernatur odio earum impedit incidunt necessitatibus laudantium deserunt officiis reprehenderit! Ipsa, quibusdam vitae? Nobis deleniti id nostrum dolorem vel totam cupiditate architecto atque incidunt sed iure facilis, quis tempore saepe numquam itaque perferendis.</p>
                    </article>

                    <article className='story-block'>
                        <h3 className='story-subtitle'>Від концепції до реалізації</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi animi ipsa voluptatem aperiam officiis iste tempore adipisci amet. Similique ullam ipsam voluptas ab, excepturi, ipsa totam culpa sapiente tempore expedita repudiandae doloremque dignissimos nihil dolore autem nemo!
                        </p>
                    </article>

                    <article className='story-block'>
                        <h3 className='story-subtitle'>А що буде потім?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero, rem repellat inventore blanditiis cupiditate reprehenderit ad veritatis necessitatibus architecto fugit placeat voluptatibus id, in quisquam! Impedit commodi, sed consequuntur aliquam, sunt minima ullam possimus consequatur odit, culpa ea!
                        </p>
                    </article>
                </div>
            </div>

            <div className='creator-section'>
                <h2 className='creator-title'>
                    Знайомтесь з творцем
                </h2>
                <div className='creator-card'>
                    <img src={creatorPhoto} alt="Creators photo" className='creator-pic' />
                    <div className='card-content'>
                        <h3 className='creator-name'>Крушельницький Ігор</h3>
                        <p className='creator-info'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id libero incidunt optio, aut neque, expedita commodi dignissimos sint ab facilis reiciendis laboriosam aliquid odit! Dignissimos ea, repellendus in maiores ullam, eligendi molestias harum, optio aspernatur libero distinctio labore cupiditate. Soluta saepe praesentium aut enim nemo aspernatur voluptates cupiditate adipisci unde, et reprehenderit consectetur, aperiam ea odio similique earum vitae itaque. Ducimus nobis quo omnis et distinctio, eius illo praesentium dicta debitis!
                        </p>

                        <div className='creator-quote'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#131313" d="M13.222 3H23v10l-4 7h-3l3-7h-5.778zM1 3h9.778v10L7 20H4l3-7H1z"/></svg>
                            <p className='quote'>
                                Bla bla bla, any txt dropped from somewhere. . .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div className='feedback-wrapper'>
            <section className='feedback-section'>
                <div className='feedback-heading'>
                    <h2 className='feedback-title'>Маєте ідею? Знайшли баг чи все настільки чудово, що вирішили поділитись враженнями?</h2>
                    <p className='feedback-subtitle'>
                        Заповнюйте форму, я читаю кожен відгук
                    </p>
                </div>
                <form className='feedback-form'>
                    <input className='form-input input-name' type="text" name="name" placeholder="Ваше ім'я" />
                    <input className='form-input input-email' type="email" name="email" placeholder="Ваш Email" />
                    <textarea className='form-input input-message' name="message" placeholder="Ваше повідомлення..." />
                </form>
            </section>
        </div>
        
    </div>
    );
}