import React from 'react';
import styled from 'styled-components';
import NewsletterForm from '../../forms/Newsletter';
import FooterInfo from './Info';

const Footer =()=> {
    const Links = [
        {
            title: "Product",
            list: [
                {
                    slug: 'swap',
                    title: 'Swap',
                },
                {
                    slug: 'staking',
                    title: 'Staking',
                },
                {
                    slug: 'farmin',
                    title: 'Farming',
                },
                {
                    slug: 'liquidity',
                    title: 'Liquidity',
                },
                {
                    slug: 'nft',
                    title: 'NFT',
                },
            ]
        },
        {
            title: "Support",
            list: [
                {
                    slug: 'faq',
                    title: 'FAQ',
                },
                {
                    slug: 'discord',
                    title: 'Discord',
                },
                {
                    slug: 'tokenomics',
                    title: 'Tokenomics',
                },
                {
                    slug: 'audits',
                    title: 'Audits',
                },
            ]
        },
    ]

    const FooterWrapper = styled.footer`
        background-color: #0B0D17;
        color: #D9DBE1;
        padding: 65px 0;

        .quick-links a{
            color: #D9DBE1;
            text-decoration: none;
            font-size: 16px;
            font-weight: 400;
            line-height: 2.2;

        }
    `;
  return (
    <FooterWrapper>
        <div className="container">
            <div className="row gy-5">
                <div className="col-xxl-3 col-lg-4 order-lg-last">
                    <NewsletterForm />
                </div>
                <div className="col-lg-4">
                    <FooterInfo />
                </div>
                <div className="col-xxl-5 col-lg-4">
                    <div className="row gy-5">
                        {Links && Links.map((a, akey) => (
                            <div key={akey} className='col-lg-6'>
                                {a.title && <h4 className='h4'>{a.title}</h4>}
                                {a.list && <ul className="list-unstyled mb-0 quick-links">
                                    {a.list.map((b, bkey) =>(
                                        <li key={bkey}><a href={`${b.slug}`}>{b.title}</a></li>
                                    ))}
                                </ul>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </FooterWrapper>
  )
}

export default Footer;