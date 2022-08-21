import React from 'react';
import styled from 'styled-components';
import CoverBanner from './hero-cover.png';

const HeroCover =(props)=> {
    const Section = styled.section`
    `
    const Box = styled.div`
        padding: 8vh 0;
        text-align: center;
        border-radius: 24px;
        background: var(--gr-primary);

        @media(min-width: 1199px){
            background: url('${CoverBanner}');
            background-size: cover;
            background-position: center right;
            padding: 10vh 0;
        }

        h2{
            font-size: 32px;
            line-height: 1.;
            font-weight: 600;
            margin-bottom: 10px;

            @media(min-width: 991px){
                font-size: 60px;
            }
        }
        p{
            font-size: 20px;
            line-height: 30px;
        }
    `
  return (
    <Section>
        <div className="container">
            <Box>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        {props.heading && <h2>{props.heading}</h2>}
                        {props.content && <p>{props.content}</p>}
                    </div>
                </div>
            </Box>
        </div>
    </Section>
  )
}

export default HeroCover