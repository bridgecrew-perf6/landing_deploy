import React,{Component} from 'react';
import './easter.css';
import Logo from '../assets/images/logo.png';
import Ios from '../assets/images/ios.png';
import Android from '../assets/images/android.png';
import {Link} from 'react-router-dom';
import Whatsapp from '../assets/images/whatsapp.png'
import Telegram from '../assets/images/tele.png';
import Twitter from '../assets/images/t.png';
import Instagram from '../assets/images/insta.png';
import Facebook from '../assets/images/fb.png';

export default class EasterPromo extends Component {
    constructor(props){
        super();
        this.state = {
            location:false,
            faqone:true,
            faqtwo:false,
            faqthree:false,
            faqfour:false,
            showmodal:false
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleAll = this.handleToggleAll.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleCountry = this.toggleCountry.bind(this);
    }
    handleToggleAll(){
        this.setState({faqtwo:false,faqone:false,faqthree:false,faqfour:false})
    }
    handleToggle(num){
        this.handleToggleAll();
        if(num==1){
            this.setState({faqone:!this.state.faqone});
        }
        else if(num==2){
            this.setState({faqtwo:!this.state.faqtwo});
        }
        else if(num==3){
            this.setState({faqthree:!this.state.faqthree});
        }
        else {
            this.setState({faqfour:!this.state.faqfour});
        }
        
    }
    toggleModal(){
        this.setState({showmodal:!this.state.showmodal});
    }
    toggleCountry(){
        this.setState({location:!this.state.location});
    }
    render(){
        return (
            <div className="allbody">
                
                <nav class="navbar">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt="MoneyMie Logo"/>
                    </Link>
                    <div className="alinks">
                    <a href="#how-it-works">How it works</a>
                    <a href="#faqs">FAQS</a>
                        
                    </div>
                </nav>
                <div className="moneymieintro">
                <div className="taboptions">
                    <div className="tabs">
                        <div  className={this.state.location  ? 'options tableft' : 'options chosen tableft'} onClick={this.toggleCountry}>I live in Nigeria</div>
                        <div  className={this.state.location  ? 'options chosen tabright ' : 'options tabright'} onClick={this.toggleCountry}>I live in the US</div>
                    </div>
                </div>
                <div  className={this.state.location  ? 'introtext' : 'hidden'}>
                    Send money to a special person, we’ll topup them with N2,000 extra. 
                    <div className="introdesc">
                        <div className="col-md-10 flex">
                        <a href='https://play.google.com/store/apps/details?id=moneymie.bank.nigeria.remit.sendmoney'>
                            <img src={Android}/>
                        </a>
                            <a href='https://apps.apple.com/us/app/moneymie/id1538278032'>
                                <img src={Ios}/>
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div className={this.state.location  ? 'hidden' : 'introtext'}>
                    Receive money from a Moneymie user in the USA and get extra N2,000. 
                    <div className="introdesc">
                        <div className="col-md-10 flex">
                            <button className="btn-share" onClick={this.toggleModal}>Share Link to sender <i className="fa fa-share-alt"></i></button>
                           
                        </div>
                    </div>
                    </div>
                   
                </div>
                <div  className={this.state.location  ? 'how-it-works' : ' hidden'} id="how-it-works">
                    <h3 className="hheader">
                        How it works
                    </h3>
                    <div className="card-center">
                        <div className="how-cards">
                            <div className="num">
                                1 
                            </div>
                            <div className="cardstext">
                            Download the Moneymie app and complete your verification
                            </div>
                        </div>
                        <div className="how-cards">
                            <div className="num">
                                2 
                            </div>
                            <div className="cardstext">
                            Exchange any amount above $10 to Naira 
                            </div>
                        </div>
                        <div className="how-cards">
                            <div className="num">
                                3 
                            </div>
                            <div className="cardstext">
                            Transfer to a Naira account- Your remark must include the word "Easter"

                            </div>
                        </div>
                        <div className="how-cards">
                            <div className="num">
                                4
                            </div>
                            <div className="cardstext">
                            We’ll top up your first transfer with N2,000
                            </div>
                        </div>
                    </div>
                </div>
                <div  className={this.state.location  ? ' hidden' : 'how-it-works'} id="how-it-works">
                    <h3 className="hheader">
                        How it works
                    </h3>
                    <div className="card-center">
                        <div className="how-cards">
                            <div className="num">
                                1 
                            </div>
                            <div className="cardstext">
                            Share this  message with a friend or family in the USA
                            </div>
                        </div>
                        <div className="how-cards">
                            <div className="num">
                                2 
                            </div>
                            <div className="cardstext">
                            They sign up to Moneymie 
                            </div>
                        </div>
                        <div className="how-cards">
                            <div className="num">
                                3 
                            </div>
                            <div className="cardstext">
                            They send money to your bank account

                            </div>
                        </div>
                        <div className="how-cards">
                            <div className="num">
                                4
                            </div>
                            <div className="cardstext">
                            The first person you send money to gets extra N2,000
                            </div>
                        </div>
                    </div>
                </div>
               
                <div class="faqs" id="faqs">
                    <h3 className="headertext">
                        Frequently Asked Questions  
                    </h3>
                    <div className="faqcontent">
                        <div className="faq">
                            <div className="faqtitle" onClick={() => this.handleToggle(1)}>
                                What is MoneyMie?
                                <i>{
                                        this.state.faqone  ? '-' : '+'
                                    }</i>
                            </div>
                            <div className={this.state.faqone  ? 'faqtext' : 'hidden'}>
                            Moneymie is a digital bank for African migrants. We make it easy for you to spend money in Nigeria from the US. At ZERO fees, you can:
                            Get instant USD and NGN wallets, Exchange USD to NGN, Exchange NGN to USD, Send money to Nigeria, Receive money from Nigeria.
                            </div>
                        </div>
                    
                        <div className="faq">
                            <div className="faqtitle" onClick={() => this.handleToggle(2)}>
                            Is there a limit on how much I can send to Nigeria?
                                <i>{
                                        this.state.faqtwo  ? '-' : '+'
                                    }</i>
                            </div>
                            <div className={this.state.faqtwo  ? 'faqtext' : 'hidden'}>
                            You can deposit, spend or transfer up to $2,000 daily and up to $20,000 monthly on Moneymie once you complete your verification.
                            </div>  
                        </div>
                        <div className="faq">
                            <div className="faqtitle" onClick={() => this.handleToggle(4)}>
                            What do I need to complete my verification?
                                <i>{
                                        this.state.faqfour  ? '-' : '+'
                                    }</i>
                            </div>
                            <div className={this.state.faqfour  ? 'faqtext' : 'hidden'}>
                            Moneymie is a digital bank for African migrants. We make it easy for you to spend money in Nigeria from the US. At ZERO fees, you can:
                            Get instant USD and NGN wallets, Exchange USD to NGN, Exchange NGN to USD, Send money to Nigeria, Receive money from Nigeria.
                            </div>
                        </div>
                        <div className="faq">
                            <div className="faqtitle" onClick={() => this.handleToggle(3)}>
                            What are the terms and conditions?
                                <i>{
                                        this.state.faqthree  ? '-' : '+'
                                    }</i>
                            </div>
                            <div className={this.state.faqthree  ? 'faqtext' : 'hidden'}>
                            To unlock this offer, exchange any amount from $10 and send a minimum of N5000 to your preferred beneficiary
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={this.state.showmodal  ? 'sharemodal showmodal' : 'sharemodal hidemodal'}>
                    <div className="sharecontent">
                        <div className="sharetext">
                            Share link to <i className="closebtn fa fa-close" onClick={this.toggleModal}></i>
                        </div>
                        <div className="icons">
                            <a href="https://wa.me/?text=Please send me money this Easter through Moneymie so I can get N2,000 extra. See details here:https://moneymie.com/easter2k" target="_blank">
                               <img src={Whatsapp} width="50" height="50"/>
                            </a>
                            <a href="https://twitter.com/intent/tweet?text=Please send me money this Easter through Moneymie so I can get N2,000 extra. See details here:https://moneymie.com/easter2k&url=https://moneymie.com/easter2k" target="_blank">
                                
                                <img src={Twitter} width="50" height="50"/>
                            </a>
                            <a href='https://www.facebook.com/sharer/sharer.php?u=https://moneymie.com/easter2k' target="_blank">
                                <img src={Facebook} width="50" height="50"/>
                            </a>
                            
                            {/* <img src={Instagram} width="50" height="50"/> */}
                            <a href="https://t.me/share/url?url=https://moneymie.com/easter2k&text=Please send me money this Easter through Moneymie so I can get N2,000 extra. See details here:https://moneymie.com/easter2k" target="_blank">
                                <img src={Telegram} width="50" height="50"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

