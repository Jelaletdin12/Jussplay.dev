// components/SuccessStorySection.jsx
import styles from './SuccessStorySection.module.scss';
import axie from '../../assets/blockchain4/axie.png'
import gods from '../../assets/blockchain4/gods.png'
import battle from '../../assets/blockchain4/battle.png'
import allien from '../../assets/blockchain4/allien.png'
import splint from '../../assets/blockchain4/splint.png'
import neon from '../../assets/blockchain4/neon.png'
import snake from '../../assets/blockchain4/snake.png'
import sandbox from '../../assets/blockchain4/sandbox.png'
import sorar from '../../assets/blockchain4/sorar.png'
import sorare from '../../assets/blockchain4/sorare.png'

const partners = [
  { id: 1, name: 'Axie Infinity', logo: axie },
  { id: 2, name: 'Gods Unchained', logo: gods  },
  { id: 3, name: 'Splinterlands', logo: splint  },
  { id: 4, name: 'Sandbox 3D', logo: sandbox  },
  { id: 5, name: 'Allien Worlds', logo: allien  },
  { id: 6, name: 'Crypto Snake', logo: snake  },
  { id: 7, name: 'Neon district', logo: battle  },
  { id: 8, name: 'Sorare', logo: sorare  },
  { id: 9, name: 'Neon district', logo: neon  },
  { id: 10, name: 'Sorare', logo: sorar  },

];

const SuccessStorySection = () => {
  return (
    <section className={styles['success-story']}>
      <h2>Our Success Story As A Web3 Game Development Company</h2>
      <div className={styles['success-story__logos']}>
        {partners.map(partner => (
          <div key={partner.id} className={styles['success-story__logo']}>
            <img src={partner.logo} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStorySection;
