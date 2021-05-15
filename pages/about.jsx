import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <p>1 &lt;!DOCTYPE About Page&gt;</p>
      <p>2<span  className={styles.red}> &lt;! --Warning: Learn a bit of HTML before you proceed-- &gt;</span></p>
      <p>3 &lt;rel="import" href="/my/details/who/when/what"&gt;</p>
      <p>4</p>
      <p>5 &lt;var&gt; name = <span  className={styles.turqoise}>"Jobin Babu Ayathil" </span>&lt;/var&gt;</p>
      <p>6 const alias = <span className={styles.neon}>"@the_injineer"</span></p>
      <p>7 &lt;var&gt;Age = <span className={styles.orange}>21years</span>&lt;/var&gt;</p>
      <p>8 &lt;var&gt;Location = India&lt;/var&gt;</p>
      <p>9 </p>
      <p>10 &lt;div className=<span className={styles.category}>"Skills"</span>&gt;</p>
      <p>11 &nbsp;&nbsp;Web Development - MERN</p> 
      <p>12 &nbsp;&nbsp;UI/UX Design - Figma, Adobe XD</p> 
      <p>13 &nbsp;&nbsp;Product &amp; Visual Design - Adobe Suite</p>
      <p>14 &nbsp;&nbsp;Google Cloud Platform</p>
      <p>15 &nbsp;&nbsp;Machine Learning - Tensorflow</p>
      <p>16 &nbsp;&nbsp;Programming - Python, C, Js, Arduino</p>
      <p>17 &nbsp;&nbsp;Android - AOSP ROM Development</p>
      <p>18 &lt;/div&gt;</p>
      <p>19 </p>
      <p>20 &lt;table className=<span className={styles.category}>"Education"</span>&gt;</p>
      <p>21 &nbsp;&lt;tr&gt;</p>
      <p>22 &nbsp;&nbsp;&lt;th&gt;Course&lt;/th&gt;</p>
      <p>23 &nbsp;&nbsp;&lt;th&gt;Institution&lt;/td&gt;</p>
      <p>24 &nbsp;&lt;/tr&gt;</p>
      <p>25 &nbsp;&lt;tr&gt;</p>
      <p>26 &nbsp;&nbsp;&lt;td&gt;Bachelors in Computer Science &amp; Engg&lt;/dt&gt;</p>
      <p>27 &nbsp;&nbsp;&lt;td&gt;Providence College of Engg&lt;/dd&gt;</p>
      <p>28 &nbsp;&lt;/tr&gt;</p>
      <p>29 &lt;/table&gt;</p>
      <p>30</p>
      <p>31 &lt;dl className=<span className={styles.category}>"Experience"</span>&gt;</p>
      <p>32 &nbsp;&nbsp;&lt;dt&gt;Design Intern&lt;/dt&gt;</p>
      <p>33 &nbsp;&nbsp;&lt;dd&gt; @ UiFLO&lt;/dd&gt;</p>
      <p>34 &nbsp;&nbsp;&lt;dt&gt;Lead&lt;/dt&gt;</p>
      <p>35 &nbsp;&nbsp;&lt;dd&gt; @ Google DSC&lt;/dd&gt;</p>
      <p>36 &nbsp;&nbsp;&lt;dt&gt;Cloud Facilitator&lt;/dt&gt;</p>
      <p>37 &nbsp;&nbsp;&lt;dd&gt; @ Google Cloud&lt;/dd&gt;</p>
      <p>38 &nbsp;&nbsp;&lt;dt&gt;Lead&lt;/dt&gt;</p>
      <p>39 &nbsp;&nbsp;&lt;dd&gt; @ Hack Club&lt;/dd&gt;</p>
      <p>40 &nbsp;&nbsp;&lt;dt&gt;CTO&lt;/dt&gt;</p>
      <p>41 &nbsp;&nbsp;&lt;dd&gt; @ IEDC-Providence&lt;/dd&gt;</p>
      <p>42 &nbsp;&nbsp;&lt;dt&gt;Vice-President&lt;/dt&gt;</p>
      <p>43 &nbsp;&nbsp;&lt;dd&gt; @ FOSS Club&lt;/dd&gt;</p>          
      <p>44 &lt;/dl&gt;</p>
    </div>    
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
