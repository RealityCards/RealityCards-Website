export const faqs = [
  {
    header: "What is Reality Cards?",
    body:
      "<p>Reality Cards is the world's first NFT-based prediction market.<br><br>It is completely different from existing prediction markets (Augur, Gnosis Sight/Omen, Flux etc.) in that instead of betting on an outcome, you <i>own</i> it. Concepts such as shares, bids, asks do not exist- even 'odds' are abstracted away, replaced by a 'daily rental price'.</p>",
  },
  {
    header: "What does it mean to own an outcome?",
    body:
      "<p>Each outcome is represented by a unique Non Fungible Token (NFT). In order to ‘bet’ on an outcome, you purchase the corresponding NFT. For example, if the event is “Who will win the 2020 US General Election” and you think Donald Trump will win, you purchase the ‘Donald Trump’ NFT. Only one person can own a token/outcome at any time. The NFTs are referred to as Cards throughout the site and this FAQ.</p>",
  },
  {
    header: "How do I buy a Card?",
    body:
      "<p>Cards can not be bought, only rented. The prices given for each Card on Reality Cards are the daily rental prices in DAI. In order to rent a Card, you must have Metamask installed and unlocked, and you must own some DAI (and some Ether for the gas fee). To rent a Card:<ul><li>Choose the daily rental price you wish to pay</li><li>Choose how much DAI you wish to deposit to fund the rent</li><li>Press ‘Rent Card’</li></ul></p>",
  },
  {
    header: "What is Metamask? What is DAI?",
    body:
      "<p>Metamask is a browser extension that allows websites to interact with the Ethereum blockchain, and gives users an in-browser Ethereum wallet. DAI is a cryptocurrency pegged to the US Dollar.</p>",
  },
  {
    header: "Do you support wallets other than Metamask?",
    body:
      "<p>Not at this time, however it is near the top of our to-do list :)</p>",
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
      "<p>At the end of the event, all the rent paid among all the Cards is distributed to all the owners of the winning Card, in proportion to how long they have owned it. This is another key difference between Reality Cards and other prediction markets. It is irrelevant how much rent you have paid- all that matters is how long you have owned the winning Card.<br/><br/>For example: consider the event “Who will win the 2020 US General Election” and assume there are two Cards: Trump and Biden (the actual market has three cards, we are assuming two for simplicity).<br/><br/>Assume also that the event is open a total of 3 months:<ul><li>Alice pays 100 DAI to rent Trump for one month</li><li>Bob pays 900 DAI to rent Trump for two months</li><li>Charlie pays 2000 DAI to rent Biden for three months</li></ul></br>It’s election time- Trump wins. Total rent paid was 3000 DAI. Alice owned the winning Card (Trump) for one month out of a total three- therefore, she will win one third of the total rent- 1000 DAI. Bob will win 2000 DAI and Charlie, having rented the losing card, will not win anything.</p>",
  },
  {
    header: "What is the deposit?",
    body:
      "<p>The deposit is how much DAI is actually sent to the contract. Rent will gradually be taken out of your deposit balance as time passes.<br/><br/>For example: you rent a Card at a daily rental price of 24 DAI (or, 1 DAI per hour), and you deposit 4 DAI. After one hour, you will have paid 1 DAI in rent, and will have 3 DAI deposit remaining. After a total of four hours, your entire deposit will be used up, and you will lose ownership of the Card.<br/><br/>Each Card has a seperate deposit balance, it is not pooled among multiple Cards. It is possible for you to run out of deposit and lose ownership of one Card whilst still having a deposit balance remaining on a different Card.</p>",
  },
  {
    header: "Can I withdraw my deposit?",
    body:
      "<p>Yes, you are free to withdraw any unused deposit (that is, deposit that has not been used to pay rent) whenever you wish. There is one exception: if you have owned a Card for less than one hour, your withdrawal will be limited to ensure that you have enough left to own the Card for one hour.<br/><br/>For example: the daily rental price is 24 DAI, or 1 DAI per hour. You have owned the Card for 45 minutes, and have 5 DAI deposit remaining. You wish to withdraw your entire deposit. You will only be able to withdraw 4.75 DAI, 0.25 DAI will be left, as this is the cost of owning the Card for another 15 minutes.</p>",
  },
  {
    header:
      "If someone else takes the Card off me by paying a higher daily rental, is my unused deposit automatically returned?",
    body:
      "<p>No. Deposit withdrawals must be requested manually. The reason for this mechanic is so you will automatically own the Card again in the future if the new owner’s deposit runs out. You can easily see in the ‘My Cards’ page which Cards have a deposit balance left. The one hour minimum deposit mentioned in the previous question does not apply if you are not the current owner. If you are not the current owner, you are always able to withdraw your entire deposit.</p>",
  },
  {
    header:
      "What happens if my deposit runs out, or I withdraw all my deposit?",
    body:
      "<p>Card ownership will then automatically revert to whoever owned the Card before you, at the price they were previously paying (i.e., the daily rental price will drop). If the previous owner has zero deposit, the process is repeated, until a previous owner with a deposit remaining is found. If there are no such previous owners, the Card becomes unowned and the price is reset to zero.</p>",
  },
  {
    header: "How do I withdraw my winnings if I win?",
    body:
      "<p>The ‘My Cards’ page lists all the Cards you currently own, or have owned in the past. If any of these are winning Cards, a button ‘Withdraw’ will appear. It will also display what your winnings are.</p>",
  },
  {
    header: "How does Reality Cards know who wins each event?",
    body:
      "<p>Reality Cards uses a completely decentralised oracle solution to obtain the winning answer- the Reality Cards team have zero ability to set the winning outcome. In the current version, realit.io is used for the initial oracle, and if there are continued disputes, kleros.io is used as a decentralised court. This is the exact same Oracle solution that Gnosis Omen uses. <br/><br/>This approach will be changed in a future version, when Reality Cards tokens (RCs) have been implemented. Then, a RC holder will be nominated as the initial resolver- resolution will only be escalated to realit.io if there is a dispute. Further, RC holders will replace kleros.io as the final resolution layer if there are continued disputes on realit.io.",
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
      "<p>In the MVP, nothing happens- but for our V1 release, the winning Card will be automatically transferred to the winner- as defined by owning the winning outcome for the longest period of time. Thus, after the event has ended, the Card becomes a collectable. Losing Cards will be burnt.</p>",
  },
  {
    header: "How do Estimated Winnings work?",
    body:
      "<p>Estimated winnings are given when you rent a card, and in the 'My Cards' section. These are estimated because actual winnings depend on future rental prices, which cannot be known in advance. Thus, the estimated winnings calculation assumes that the sum of rental prices of all Cards for that market remain the same until the end of the event. If rental prices in the future are greater, your winnings will be higher than the estimate given, if they are lower your winnings will be lower.<br/><br/>If someone takes the Card off you before your deposit is used, your % return will be higher, because the rental price of the Card will have increased (that is the only way they can take it off you). However, since you owned the card for less time than originally estimated, your actual winnings may be lower. </p>",
  },
  {
    header:
      "I am currently renting a Card, and wish to send it to someone else, how do I do this?",
    body:
      "<p>This is not possible. Before the event being bet on has taken place, only the contract itself can change ownership of the Card. However, when the event has occurred, you are free to transfer the Card to another address using any NFT/ERC721 wallet- but only if you are the winner! The winner gets to keep the Card at the end of the event.</p>",
  },
  {
    header:
      "Does it make any difference if I own the Card at the end of the event/if I am the last owner of the Card?",
    body:
      "<p>It does not make any difference. In the current MVP, Cards remain with the final owner forever, however for our main release, when the oracle resolves, the winning Card will be automatically transferred to the winner- as defined by owning the winning outcome for the longest period of time. Thus, after the event has ended, the Card becomes a collectable. Losing Cards will be burnt.</p>",
  },
  {
    header: "Are there any limits on prices/deposits etc?",
    body:
      "<p>Yes, there are three:<ol><li>The minimum daily rental price is 1 DAI.</li><li>To take a Card off an existing owner, you must set a daily rental price at least 10% above what the current owner is paying.</li><li>You must deposit enough DAI to fund at least one hour’s rent (i.e. the daily rental price you have chosen, divided by 24).</li></ol></p>",
  },
  {
    header:
      "I can't figure out what the optimum strategy is? When is it in my interests to rent a token, if I think there is an X% chance of an outcome occurring?",
    body:
      "<p>If you think there is an X% chance of outcome Y occurring, it is in your interests to rent Y if the current price is less than X * (average combined prices of all Cards).<br/><br/>There is an additional strategy even if you have no idea what the the 'correct' odds are for an event: it is always in your interests to rent all the tokens if their combined prices are lower than the average of their combined prices- you are essentially buying a 'complete set' (i.e. a share of all the outcomes) at a lower price than previous users paid. Of course, these strategies assume zero gas fees.<br/><br/>For further discussion, please see <a href='https://ethresear.ch/t/what-is-the-optimum-strategy-when-using-a-harberger-tax-prediction-market/7194' target='_blank'>here</a>.</p>",
  },
  {
    header:
      "Are there any owned functions? Is the contract upgradable? I.e. does the Reality Cards team have any admin powers, or is the contract completely decentralised?",
    body:
      "<p>There are zero owned (or pausable) functions, neither is it upgradable. The Reality Cards team have zero ability to interfere in any way with the contract; it is 100% decentralised.</p>",
  },
  {
    header: "Can I create a new market/event myself?",
    body:
      "<p>This is not currently possible, but is on our roadmap. Allowing users to create their own markets is an important feature of a decentralised prediction market, so we will be adding this functionality as soon as possible.</p>",
  },
  {
    header: "Are there any fees?",
    body:
      "<p>No- 100% of the rent is returned to users in the form of winnings.</p>",
  },
  {
    header: "How does Reality Cards make money?",
    body: "<p>Reality Cards does not make any money at this time.</p>",
  },
  {
    header: "Is the code open source?",
    body:
      "<p>Yes, the github is <a href='https://github.com/RealityCards' target='_blank'>here</a> and all the contracts are verified on Etherscan.</p>",
  },
  {
    header: "Has it been audited?",
    body:
      "<p>Yes, the code has undergone a full audit by <a href='https://www.ditcraft.io/audits/realitycards' target='_blank'>ditCraft</a>. It has also passed a ‘spot check’ by the <a href='https://twitter.com/epheph' target='_blank'>Ethereum Foundation’s Scott Bigelow</a>.</p>",
  },
  {
    header: "Is there a Reality Cards token?",
    body:
      "<p>Yes, there will be a Reality Cards ERC-20 governance token (RC), however it has not yet been implemented.<br><br>Tokens will be partly distributed via 'liquidity mining', whereby users of the protocol will automatically be granted governance tokens, in proportion to rent paid.</p>",
  },
  {
    header: "What is the Reality Cards governance token (RC) used for?",
    body:
      "<p>The token will have the following uses:<ul><li>Project governance</li><li>Final layer of outcome resolution if there are continued disputes</li><li>Required to create markets (helps to limit spam, duplicate markets etc.)</li><li>Incentivise platform use via liquidity mining</li></ul></br>It will not be necessary to own tokens to interact with existing markets, to rent tokens, etc.</p>",
  },
  {
    header:
      "What is the allocation of the Reality Cards governance token (RC)?",
    body:
      "<p>Token allocation:<ol><li>Founders/advisors: 25%</li><li>Project Treasury: 25%</li><li>Private & public sales and/or liquidity mining: 50%</li></ol>Tokens allocated to the Project Treasury can only be used with majority approval of existing token holders. There is also a two year vesting period, from the date of the TGE (Token Generation Event), for founders, advisors, and investors (20% initially available, then 20% vesting each six months).<br><br>'Liquidity mining' refers to the allocation of RC tokens to everyone who rents tokens, a growth model used to great success by existing defi platforms such as Balancer and Compound.</p>",
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
