import React from 'react'
import styled from 'styled-components'

const CallToAction =()=> {
    const CallActionWrapper = styled.section`
        margin-bottom: var(--call-to-action-margin, 100px);

        .call-to-action-padding{
            padding: var(--call-to-action-padding, 65px);
        }
    `
    const BoxContent = styled.div`

        h4{
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 0px;
        
            @media(min-width: 991px){
            font-size: 30px;
            }
        }
    `
    const ButtonGroup = styled.div`
        display: flex;
        gap: 15px;
        @media(min-width: 991px){
            justify-content: flex-end;
        }
        @media(max-width: 777px){
            flex-direction: column-reverse;
        }
    `
  return (
    <CallActionWrapper>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="gr-primary call-to-action-padding rounded-4">
                        <div className="row gy-4">
                            <div className="col-xl col-lg-6">
                                <BoxContent>
                                    <h4 className="h3 mb-2">Welcome Home to DeFi</h4>
                                    <p className='fs-20 mb-0'>Join other startups already growing with Qroni.</p>
                                </BoxContent>
                            </div>
                            <div className="col-xl-auto col-lg-6">
                                <ButtonGroup>
                                    <a href="#" className="btn btn-sm btn-light">Learn more</a>
                                    <a href="https://medium.com/@groniswap" className="btn btn-sm btn-primary">Connect Wallet</a>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CallActionWrapper>
  )
}

export default CallToAction