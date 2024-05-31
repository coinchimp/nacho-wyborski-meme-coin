import styles from './Faq.module.css';

const Faq = () => {
  return (
    <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>

      <h2>❓ What is KRC-20?</h2>
      <p>KRC-20 is a token standard on the Kaspa network. It defines the rules and conventions for creating and managing fungible tokens, similar to the ERC-20 standard on Ethereum. This standard ensures that all tokens created on the Kaspa network are interoperable and can be used within the ecosystem seamlessly.</p>

      <h2>💰 When and how can I buy Nacho?</h2>
      <p>We are waiting for KRC-20 to be launched to provide a date. Nacho will be minted. You will need to mint your tokens.</p>

      <h2>🪙 What does mint mean?</h2>
      <p>When a token is minted, it is generated and added to the total supply, making it available for use within the Kaspa ecosystem. The token will be available to mint on a platform being developed by KRC-20 community.</p>

      <h2>🎁 Will Nacho offer airdrops?</h2>
      <p>No. Fair launch won't make it possible.</p>

      <h2>❓ What is Kaplex?</h2>
      <p>Kasplex is designed as a versatile solution, incorporating the data insertion protocol, an open-source indexer, data availability, and comprehensive APIs. It leverages Kaspa's high block rate, scalability, and decentralized POW Layer-1 to facilitate efficient data insertion, address the UTXO bloat issue, and support a sustainable ecosystem.</p>
      <p>Kasplex provides an open-source indexer that enables developers and users to effectively retrieve and check data associated with KRC-20 tokens, NFTs, and other digital assets on Kaspa.</p>
      <p>Kasplex introduces the KRC-20 token standard, which defines a set of rules and conventions for creating and managing fungible tokens on Kaspa. (<a href="https://www.kasplex.org/home" target="_blank" rel="noopener noreferrer">https://www.kasplex.org/home</a>)</p>

      <h2>🚀 Will Nacho have a presale?</h2>
      <p>Nacho will be fair launch. A fair launch ensures equal opportunity for all to acquire tokens without pre-sales or preferential treatment, fostering trust and transparency in the community.</p>

      <h2>💼 Where can I store Nacho?</h2>
      <p>Once the KRC20 standard is live on the Kaspa Mainnet, wallet providers are highly likely to update their wallets to support KRC20. The only wallet known to be working on supporting KRC20 at the time of launch is Kasware - <a href="https://www.kasware.xyz/" target="_blank" rel="noopener noreferrer">https://www.kasware.xyz/</a></p>

      <h2>⛏️ Can I mine Nacho?</h2>
      <p>Based on our understanding, KRC20 tokens are not mineable, including Nacho.</p>

      <h2>💵 How much will Nacho cost?</h2>
      <p>To be determined. Based on the Kasplex whitepaper, each mint of new KRC20 Tokens will require a gas fee of 1 KAS that will be paid to miners. Nacho will allow for batch mints of 287,000 Nacho tokens per mint. This is subject to change prior to finalization of the whitepaper.</p>

      <h2>🔄 What will be the DEX for Nacho?</h2>
      <p>To be determined. Once the KRC20 standard is live on the Kaspa Mainnet, it is highly likely we will see a DEX built and deployed. We will need to wait and see.</p>

      <h2>🤝 Does Nacho receive donations?</h2>
      <p>kaspa:qrt3lf6jejjdzwtnvlr3z35w7j6q66gt49a7grdwsq98nmlg5uz97whuf8qfr</p>
    </div>
  );
};

export default Faq;
