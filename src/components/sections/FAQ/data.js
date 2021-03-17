export const faqs = [
  {
    header: "What is Reality Cards?",
    body:
      "<p>Reality Cards is a hybrid of NFT art and prediction markets.<br><br>Each outcome is a unique Non Fungible Token (NFT), and instead of betting on an outcome, you <i>own</i> it (or to be more accurate, you rent it). Concepts such as shares, bids, asks do not exist- even 'odds' are abstracted away, replaced by a 'daily rental price'. At the end of the event, the longest owner of each outcome keeps it forever (regardless of whether or not the outcome was correct), it thus becomes a collectable.</p>",
  },
  {
    header: "What does it mean to own an outcome?",
    body:
      "<p>In order to ‘bet’ on an outcome, you rent the corresponding NFT. For example, if the event is “Which team will win the Premier League” and you think Liverpool will win, you rent the ‘Liverpool’ NFT. Only one person can own a token/outcome at any time. The NFTs are referred to as Cards throughout the site and this FAQ.</p>",
  },
  {
    header: "How do I rent a Card?",
    body:
      "<p>The prices given for each Card on Reality Cards are the daily rental prices in xDai. In order to rent a Card, you must have Metamask installed and unlocked, and you must own some xDai (or Sokol xDai, for our testnet version). To rent a Card:<ul><li>Deposit some xDai</li><li>Select the Card you wish to rent and state the daily rental price</li><li>Press ‘Rent Card’.</li></ul></p>",
  },
  {
    header: "What is the Sokol testnet?",
    body:
      "<p>Reality Cards will eventually launch on the xDai chain. For now, it is deployed on the Sokol testnet, which is xDai's own testnet.</p>",
  },
  {
    header: "How do I use and obtain Sokol xDai?",
    body:
      "<p>Please see <a href='https://medium.com/reality-cards/reality-cards-connecting-to-sokol-testnet-cbbbbe167c07'>here</a>.</p>",
  },
  {
    header: "What if I want to rent a Card but someone else already owns it?",
    body:
      "<p>No problem- you can immediately take the Card off them by paying a higher rental price. Card owners are always at risk of someone else taking it off them by paying a higher price.</p>",
  },
  {
    header: "What happens to the rent?",
    body:
      "<p>It is kept safe and sound inside the contract until the event that is being bet on occurs. Then, it is distributed to winners. The Reality Cards team have zero access to the rent or deposits, everything is completely decentralised.</p>",
  },
  {
    header: "How do winnings work? What can I win by owning Cards?",
    body:
      "<p>At the end of the event, all the rent paid among all the Cards is distributed to all the owners of the winning Card, in proportion to how long they have owned it. This is another key difference between Reality Cards and other prediction markets. It is irrelevant how much rent you have paid- all that matters is how long you have owned the winning Card.<br/><br/>For example: consider the event “Will ETH make a new All Time High by X date” and assume there are two Cards: Yes and No. <br/><br/>Assume also that the event is open a total of 3 months:<ul><li>Alice pays 100 xDai to rent 'Yes' for one month</li><li>Bob pays 900 xDai to rent 'Yes' for two months</li><li>Charlie pays 2000 xDai to rent 'No' for three months</li></ul></br>The event ends, ETH does make a new ATH, the 'Yes' Card wins. Total rent paid was 3000 xDai. Alice owned the winning Card (Yes) for one month out of a total three- therefore, she will win one third of the total rent- 1000 xDai. Bob will win 2000 xDai and Charlie, having rented the losing card, will not win anything.</p>",
  },
  {
    header: "What is the deposit?",
    body:
      "<p>The deposit is how much xDai is actually sent to the contract. Rent will gradually be taken out of your deposit balance as time passes.<br/><br/>For example: you rent a Card at a daily rental price of 24 xDai (or, 1 xDai per hour), and you deposit 4 xDai. After one hour, you will have paid 1 xDai in rent, and will have 3 xDai deposit remaining. After a total of four hours, your entire deposit will be used up, and you will lose ownership of the Card.<br/><br/>Your deposit balance is common across the entire site, allowing you to use the same deposit to rent as many Cards as you wish.</p>",
  },
  {
    header: "Can I withdraw my deposit?",
    body:
      "<p>Yes, you are free to withdraw any unused deposit (that is, deposit that has not been used to pay rent) whenever you wish.</p>",
  },
  {
    header:
      "What happens if my deposit runs out, or I withdraw all my deposit?",
    body:
      "<p>Card ownership will then automatically return to whoever owned the Card before you, at the price they were previously paying (i.e., the daily rental price will drop). If the previous owner has zero deposit, the process is repeated, until a previous owner with a deposit remaining is found. If there are no such previous owners, the Card becomes unowned and the price is reset to zero. This list of previous owners is called the 'Orderbook' and is visible on the Card page, so you can see who will own each Card again in the future, assuming no further activity.</p>",
  },
  {
    header:
      "What is the Orderbook?",
    body:
      "<p>This is a list of all previous owners of the Card, and the price they paid. Ownership will return to these owners, should the current owner's deposit run out, assuming the previous owners have a remaining deposit balance.</p>",
  },
  {
    header:
      "What is the Leaderboard?",
    body:
      "<p>This is a list of all the owners of the Card, sorted by how long they have owned it. At the end of the event, whoever is at the top of the leaderboard will win the NFT.</p>",
  },
  {
    header: "How do I access my profile?",
    body:
      "<p>Just click your address on the top right.</p>",
  },
  {
    header: "How do I withdraw my winnings if I win?",
    body:
      "<p>Go to your profile (click your address) and then select 'Resovled Events' any winnings will be clearly shown for withdrawal. Winnings are returned to your deposit balance, not to your own address. In order to get the funds returned to your own address, you need to withdraw your deposit.</p>",
  },
  {
    header: "How does Reality Cards know who wins each event?",
    body:
      "<p>Reality Cards uses a completely decentralised oracle solution to obtain the winning answer- the Reality Cards team have zero ability to set the winning outcome. Reality.eth is used for the initial oracle, and if there are continued disputes, kleros.io is used as a decentralised court. This is the exact same Oracle solution that Gnosis Omen uses.",
  },
  {
    header: "What happens if none of the Cards available ‘win’?",
    body:
      "<p>In this situation, the Oracle will return an 'invalid' response. If this occurs, all users will get 100% of their rent back.</p>",
  },
  {
    header:
      "I used to own a Card, now somebody has taken it off me. Can I still win?",
    body:
      "<p>Of course! The contract keeps track of how many seconds you have owned each Card. It does not matter when you owned the Card. All that matters is how long you owned the Card for. Indeed, it is a good thing if this happens- if someone takes the card off you, your % return will increase, because the only way they can do so is by paying a higher rental price than you.</p>",
  },
  {
    header:
      "What happens to the NFTs after the end of the event?",
    body:
      "<p>At the end of the event, each NFT is sent to whoever owned it the longest. Thus, after the event has ended, each Card becomes a collectable.</p>",
  },
  {
    header:
      "I am currently renting a Card, and wish to send it to someone else, how do I do this?",
    body:
      "<p>This is not possible. Before the event being bet on has taken place, only the contract itself can change ownership of the Card. However, when the event has occurred, you are free to transfer the Card to another address using any NFT/ERC721 wallet- but only if you are the longest owner! The longest owner gets to keep the Card at the end of the event.</p>",
  },
  {
    header:
      "Does it make any difference if I own the Card at the end of the event/if I am the last owner of the Card?",
    body:
      "<p>It does not make any difference.</p>",
  },
  {
    header: "Are there any limits on prices/deposits etc?",
    body:
      "<p>Yes, there are three:<ol><li>The minimum daily rental price is 1 xDai.</li><li>To take a Card off an existing owner, you must set a daily rental price at least 10% above what the current owner is paying.</li><li>You must deposit enough xDai to fund at least one minute's rent (i.e. the daily rental price you have chosen, divided by 1440).</li></ol></p>",
  },
  {
    header:
      "I can't figure out what the optimum strategy is? When is it in my interests to rent a token, if I think there is an X% chance of an outcome occurring?",
    body:
      "<p>If you think there is an X% chance of outcome Y occurring, it is in your interests to rent Y if the current price is less than X * (average combined prices of all Cards).<br/><br/>There is an additional strategy even if you have no idea what the the 'correct' odds are for an event: it is always in your interests to rent all the tokens if their combined prices are lower than the average of their combined prices- you are essentially buying a 'complete set' (i.e. a share of all the outcomes) at a lower price than previous users paid. Of course, these strategies assume zero gas fees.<br/><br/>For further discussion, please see <a href='https://ethresear.ch/t/what-is-the-optimum-strategy-when-using-a-harberger-tax-prediction-market/7194' target='_blank'>here</a>.</p>",
  },
  {
    header: "Can I create a new market/event myself?",
    body:
      "<p>Yes, however this is not yet possible via the interface. It is coming soon :)</p>",
  },
  {
    header: "Are there any fees?",
    body:
      "<p>There are zero fees, however, some portion of the rent (to be determined) is sent to the NFT artist in order to incentivize the creation of high quality art.</p>",
  },
  {
    header: "Is the code open source?",
    body:
      "<p>It is currently closed source. It be open sourced when we launch the project.</p>",
  },
  {
    header: "Has it been audited?",
    body:
      "<p>The code is currently undergoing multiple audits.</p>",
  },
  {
    header: "Is there a Reality Cards token?",
    body:
      "<p>Yes, there will be a Reality Cards ERC-20 governance token (RC), however it has not yet been implemented.<br><br>Tokens will be partly distributed via 'liquidity mining', whereby users of the protocol will automatically be granted governance tokens, in proportion to rent paid.</p>",
  },
  {
    header: "What is the Reality Cards governance token (RC) used for?",
    body:
      "<p>The token will have the following uses:<ul><li>Project governance</li><li>Final layer of outcome resolution if there are continued disputes</li><li>Market curation</li><li>Incentivise platform use via liquidity mining</li></ul></br>It will not be necessary to own tokens to interact with existing markets, to rent tokens, etc.</p>",
  },
  {
    header:
      "How can I buy the Reality Cards token (RC)? When will liquidity mining begin?",
    body:
      "<p>They are not yet available to the public and cannot be bought at this time. We do not yet have an ETA for liquidity mining. To keep up to date with developments, please join our <a href='https://discord.com/invite/RS8pYJu' target='_blank'>discord group</a>.</p>",
  },
  {
    header:
      "I am an angel investor and/or I represent a fund. How can I get in touch?",
    body: "<p>Please reach us by email at andrew@realitycards.io.</p>",
  },
  {
    header: "I have a question that is not listed here",
    body:
      "<p>Please join our <a href='https://discord.com/invite/RS8pYJu' target='_blank'>discord group</a> and ask your question there.</p>",
  },
];
