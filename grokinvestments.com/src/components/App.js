import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Pricing from './Pricing';
import Faq from './Faq'
import ImmigrantList from './ImmigrantList';
import ifa1 from './IFA1';
import ifa2 from './IFA2';
import ifa3 from './IFA3';
import ifa4 from './IFA4';
import Learn from './Learn';
import Footer from './Footer';
import CollegeSavings from './CollegeSavings';
import IncomeBonds from './IncomeBonds';
import MutualFunds from './MutualFunds';
import Retirements from './Retirements';
import Stocks from './Stocks';
import Contact from './ContactUs';
import AllArticles from './LearnArticles';
import ImpactInvesting from './ImpactInvesting';
import InvestInfra from './InvestInfra';
import Venture from './VentureCapital';
import FinancialRisk from './FinancialRisk';
import AllVideos from './LearnVideos';
import VideosBI from './VideosBI';
import VideosFI from './VideosFI';
import VideosMF from './VideosMF';
import VideosST from './VideosST';
import Quiz from './Quiz';
import Survey from './Survey';
import Error from './Error';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/learn" exact component={Learn}/>
        <Route path="/pricing" exact component={Pricing}/>
        <Route path="/faq" exact component={Faq}/>
        <Route path="/college-savings" exact component={CollegeSavings}/>
        <Route path="/income-bonds" exact component={IncomeBonds}/>
        <Route path="/mutual-funds" exact component={MutualFunds}/>
        <Route path="/retirements" exact component={Retirements}/>
        <Route path="/stocks" exact component={Stocks}/>
        <Route path="/contact-us" exact component={Contact}/>
        <Route path="/all-articles" exact component={AllArticles}/>
        <Route path="/impact-investing" exact component={ImpactInvesting}/>
        <Route path="/infrastructure-fund" exact component={InvestInfra}/>
        <Route path="/venture-capital" exact component={Venture}/>
        <Route path="/financial-risk" exact component={FinancialRisk}/>
        <Route path="/all-videos" exact component={AllVideos}/>
        <Route path="/basics-of-investing" exact component={VideosBI}/>
        <Route path="/fixed-income-investing" exact component={VideosFI}/>
        <Route path="/mutual-funds-videos" exact component={VideosMF}/>
        <Route path="/stocks-videos" exact component={VideosST}/>
        <Route path="/quiz" exact component={Quiz}/>
        <Route path="/survey" exact component={Survey}/>
        <Route path="/quiz-1" exact component={Quiz1}/>
        <Route path="/quiz-2" exact component={Quiz2}/>
        <Route path="/immigrant-finances" exact component={ImmigrantList}/>
        <Route path="/immigrant-finances-article-1" component={ifa1}/>
        <Route path="/immigrant-finances-article-2" component={ifa2}/>
        <Route path="/immigrant-finances-article-3" component={ifa3}/>
        <Route path="/immigrant-finances-article-4" component={ifa4}/>
        <Route path="/*" component={Error}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
