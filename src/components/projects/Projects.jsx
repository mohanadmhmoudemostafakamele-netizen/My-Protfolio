import React from 'react';
import './projects.css';

// استيراد صور المشاريع من مجلد الـ assets
// استيراد صور المشاريع من مجلد الـ assets
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpeg'; // قم بتغيير jpg إلى jpeg
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpeg'; // قم بتغيير jpg إلى jpeg
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// مصفوفة البيانات التي تحتوي على تفاصيل المشاريع
const portfolioData = [
  { id: 1, image: IMG1, title: 'Porject1', github: 'https://github.com/mohanadmhmoudemostafakamele-netizen?tab=repositories', vercel: 'https://user-login-u8eo.vercel.app/' },
  { id: 2, image: IMG2, title: 'Porject2', github: 'https://github.com/mohanadmhmoudemostafakamele-netizen?tab=repositories', vercel: 'https://user-login-u8eo.vercel.app/' },
  { id: 3, image: IMG3, title: 'Porject3', github: 'https://github.com/mohanadmhmoudemostafakamele-netizen?tab=repositories', vercel: 'https://time-a-lsala.vercel.app/' },
  { id: 4, image: IMG4, title: 'Porject4', github: 'https://github.com/mohanadmhmoudemostafakamele-netizen?tab=repositories', vercel: 'https://time-a-lsala.vercel.app/' },
  { id: 5, image: IMG5, title: 'Porject4', github: 'https://github.com/mohanadmhmoudemostafakamele-netizen?tab=repositories', vercel: 'https://user-login-u8eo.vercel.app/' },

  { id: 6, image: IMG6, title: 'Porject6', github: 'https://github.com/mohanadmhmoudemostafakamele-netizen?tab=repositories', vercel: 'https://demo6.com' }
];

function Projects() {
  return (
    <section id='projects'>
      {/* عنوان القسم */}
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfolio </h2>
      </div>

      {/* حاوية المشاريع التي تعرض البيانات ديناميكياً باستخدام map */}
      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github, vercel }) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className="portfolio_item_img">
                <img src={image} alt={title} />
              </div>
              
              <h3>{title}</h3>
              
              {/* أزرار روابط المشروع */}
              <div className="portfolio_item_btns">
                <a href={github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                <a href={vercel} target='_blank' rel='noreferrer' className='btn btn-primary'>vercel</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;