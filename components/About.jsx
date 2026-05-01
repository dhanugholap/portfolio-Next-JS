export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-left" data-aos="fade-right" data-aos-delay="100">
                <div className="about-img-wrap">
                    <div className="about-img-frame">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop"
                            alt="Coding Laptop"
                            style={{ objectPosition: 'center' }}
                        />
                    </div>
                    <div className="about-img-accent"></div>
                </div>
            </div>

            <div className="about-right" data-aos="fade-left" data-aos-delay="200">
                <p className="section-tag">About Me</p>
                <h2 className="section-title">Passionate Full Stack Developer</h2>

                <p className="section-desc">
                    I'm <strong>Dhananjay Gholap</strong>, a passionate Full Stack Developer with hands-on experience in building responsive and scalable web applications. I specialize in <strong>React.js, Next.js</strong> and <strong>Python</strong> — delivering clean, high-performance interfaces with solid backend integration.
                </p>

                <p className="section-desc" style={{ marginTop: '0.8rem' }}>
                    Worked as a <strong>Frontend Development Intern at StarCentauri Technologies Pvt. Ltd., Pune</strong> — contributed to real-world projects using React.js, MySQL, and REST APIs.
                </p>

                <div className="about-features">
                    <div className="feature-card" data-aos="flip-left" data-aos-delay="300">
                        <i className="fas fa-briefcase"></i>
                        <h4>Experience</h4>
                        <p>Frontend Development Intern at StarCentauri Technologies Pvt. Ltd., Pune — React.js, MySQL, Redux & REST APIs.</p>
                    </div>
                    <div className="feature-card" data-aos="flip-left" data-aos-delay="450">
                        <i className="fas fa-graduation-cap"></i>
                        <h4>Education</h4>
                        <p>
                            <strong>B.C.A</strong> — Tulsi College of Computer Science and Information Technology, Beed<br />
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}> University :Dr. Babasaheb Ambedkar Marathwada University (2022–2025)</span><br /><br />
                            <strong>MCA</strong> — Aditya Engineering College, Beed<br />
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Currently Pursuing</span>
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '1.8rem' }} data-aos="fade-up" data-aos-delay="550">
                    <button className="btn-primary"
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        <i className="fas fa-paper-plane" style={{ marginRight: '8px' }} />
                        HIRE ME
                    </button>
                    <a className="btn-outline-green" href="/Dhananajay-Gholap-resume-PDf-01.pdf" download
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fas fa-download" />
                        RESUME
                    </a>
                    <a href="https://github.com/dhanugholap" target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '10px 20px', borderRadius: '25px',
                            border: '1px solid var(--border)', color: 'var(--text)',
                            fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none',
                            background: 'var(--bg-card)', transition: 'all 0.3s',
                        }}>
                        <i className="fab fa-github" />
                        GITHUB
                    </a>
                </div>
            </div>
        </section>
    )
}
