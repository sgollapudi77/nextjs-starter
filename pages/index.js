import React from 'react';
import styles from './index.module.css';
import Card from './Card';
import data from './api/data.json'

export default class Index extends React.Component{
    static async getInitialProps(){
        return {cards:data}
    }

    render(){
        return(
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src="./logo.png" className={styles.logo} alt = "logo" />
                </header>
                <h1>Hey man</h1>
                <div className={styles.grid}>
                    {
                        this.props.cards.map((card)=> (
                            <Card key={card.id} />
                        ))
                    }
                </div>
            </div>
        );
    }
};

// import SmallCard from '../components/SmallCard';
// import { projectIcons } from '../components/Icons';

// import { projects } from '../utils/projectsData';

// const Home = () => (
//   <div className="home">
//     <h1>What Can I Deploy to Static Apps?</h1>
//     <div className="card-grid">
//       {projects.map((project) => {
//         const Icon = projectIcons[project.id];
//         return <SmallCard key={project.id} Icon={Icon} title={project.name} slug={project.slug} />;
//       })}
//     </div>
//   </div>
// );

// export default Home;
