import React from 'react'
import styled from 'styled-components';
import GraphChart from './img/chart-state.png';
import Icon1 from './img/movers-icon-1.png';
import Icon2 from './img/movers-icon-2.png';
import Icon3 from './img/movers-icon-3.png';
import Icon4 from './img/movers-icon-4.png';

const Movers =()=> {
    const list = [
        {
            icon: Icon1,
            title: "BTC",
            badge: "np",
            count: "$56,623.54",
            progress: "1.41%",
        },
        {
            icon: Icon2,
            title: "ETH",
            count: "$4,267.90",
            progress: "2.22%",
        },
        {
            icon: Icon3,
            title: "BNB",
            count: "$587.74",
            progress: "0.82%",
        },
        {
            icon: Icon4,
            title: "USDT",
            count: "$0.9998",
            progress: "0,03%",
        },
    ]
    const Section = styled.section`
        padding: 0px 30px;
    `
    
    const Heading = styled.div`
        h2{
            font-size: 24px;
            line-height: 1.;
            font-weight: 600;
            margin-bottom: 30px;

            // @media(min-width: 991px){
            //     font-size: 24px;
            // }
        }
    `
    
    const Box = styled.div`
        /* High Fidelity Color/Card Background */
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 18px;
        padding: 20px;
    `
    
    const BoxHead = styled.div`
        --box-head-gap: 15px;
        padding-bottom: var(--box-head-gap);
        margin-bottom: var(--box-head-gap);
        border-bottom: 1px solid rgba(236, 241, 240, 0.05);
        display: flex;
        align-items: center;
        justify-content: space-between;

        .box-text{
            display: flex;
            align-items: center;
            justify-content-center;
            gap: 1rem;
        }
        h4{
            font-size: 18px;
            line-height: 22px;
            font-weight: 600;
            margin-bottom: 0;
        }
        .badge{
            text-transform: uppercase;
            background-color: #B6B6B6;
            padding: 4px 10px;
            font-size: 10px;
            line-height: 13px;
            color: #000;
            border-radius: 4px;
        }
    `
    
    const BoxContent = styled.div`
        h3{
            font-size: 24px;
            font-weight: 500;
            line-height: 29px;
        }
        p{
            font-size: 18px;
            line-height: 29px;
            font-weight: 500;
        }
    `

  return (
    <Section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Heading>
                        <h2>Top Movers</h2>
                    </Heading>
                </div>
            </div>
            <div className="row g-4">
                {list && list.map((item, i) =>(
                    <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                        <Box>
                            <BoxHead>
                                <img src={item.icon} alt="" />
                                <div className="box-text">
                                    <h4>{item.title}</h4>
                                    <span className="badge">BitCoin</span>
                                </div>
                                <a href="#" className="link-img"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.05" x="7" y="7" width="34" height="34" rx="17" fill="white"/><path d="M21.5459 16.0839L30.7383 16.7911M30.7383 16.7911L31.4454 25.9834M30.7383 16.7911L17.2616 30.2677" stroke="#B6B6B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
                            </BoxHead>
                            <BoxContent>
                                <div className="row">
                                    <div className="col-6">
                                        {item.count && <h3>{item.count}</h3>}
                                        {item.progress && <p className='mb-0'>{item.progress}</p>}
                                        </div>
                                    <div className="col-6 align-self-center text-end">
                                        <img className='graph-chart' src={GraphChart} alt="" />
                                    </div>
                                </div>

                            </BoxContent>
                        </Box>
                    </div>
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Movers