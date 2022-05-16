import React from 'react'
import { Container } from 'reactstrap'
import styles from "./PageContent.module.css"

const cards = [
    { title: 'Fresh new layout', description: 'With Bootstrap 5, we\'ve created a fresh new layout for this template!', icon: 'bi bi-collection' },
    { title: 'Free to download', description: 'As always, Start Bootstrap has a powerful collectin of free templates.', icon: 'bi bi-cloud-download' },
    { title: 'Jumbotron hero header', description: 'The heroic part of this template is the jumbotron hero header!', icon: 'bi bi-card-heading' },
    { title: 'Feature boxes', description: 'We\'ve created some custom feature boxes using Bootstrap icons!', icon: 'bi bi-bootstrap' },
    { title: 'Simple clean code', description: 'We keep our dependencies up to date and squash bugs as they come!', icon: 'bi bi-code' },
    { title: 'A name you trust', description: 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!', icon: 'bi bi-patch-check' },
]

function PageContent() {

    const renderCard = () => (
        cards.map(card => (
            <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className={`${styles.feature} bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4`}><i className={`${card.icon}`} /></div>
                        <h2 className="fs-4 fw-bold">{card.title}</h2>
                        <p className="mb-0">{card.description}</p>
                    </div>
                </div>
            </div>
        ))
    )

    return (
        <section className="pt-4">
            <div className="row gx-lg-5">
                {renderCard()}
            </div>
        </section>

    )
}

export default PageContent