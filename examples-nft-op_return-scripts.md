### Examples for Non-Fungible Tokens

#### GENESIS Parent of NTF Token Group Transaction

This is the parent transaction for creating a group of non-fungible tokens. The transaction ID of this transaction will be used to identify non-fungible tokens belonging to this specific group. The example below creates exatly 10 tokens as its output, and does *not* contain a minting baton. Therefore this non-fungible group of tokens will only ever have 10 total tokens in existance.

SCRIPT (hex): ``6a04534c500001810747454e45534953034146430f4163746f72466f72746820436f696e4c004c0001004c0008000000000000000a``

SCRIPT BROKEN DOWN:
<table>
 <tr>
  <td>6a</td>
  <td>OP_RETURN</td>
 </tr>  
 <tr>
  <td>04</td>
  <td>length of lokad_id field (4 bytes)</td>
 </tr>
 <tr>
  <td>534c5000</td>
  <td>Lokad_ID: 'SLP\x00'</td>
 </tr>
 <tr>
  <td>01</td>
  <td>length of token_type (1 byte)</td>
 </tr>
 <tr>
  <td>81</td>
  <td>token_type: 81 (NTF parent)</td>
 </tr>
 <tr>
  <td>07</td>
  <td>number of bytes in transaction_type (7 bytes)</td>
 </tr>
 <tr>
  <td>47454e45534953</td>
  <td>Transaction Type: 'GENESIS'</td>
 </tr>
 <tr>
  <td>03</td>
  <td>length of token_ticker (3 bytes)</td>
 </tr>
 <tr>
  <td>414643</td>
  <td>Ticker: 'AFC'</td>
 </tr>
 <tr>
  <td>0f</td>
  <td>length of token_name (15 bytes)</td>
 </tr>
 <tr>
  <td>4163746f72466f72746820436f696e</td>
  <td>'ActorForth Coin'</td>
 </tr>
 <tr>
  <td>4c</td>
  <td>OP_PUSH_DATA1</td>
 </tr>
 <tr>
  <td>00</td>
  <td>token_document_url (empty)</td>
 </tr>
 <tr>
  <td>4c</td>
  <td>OP_PUSH_DATA1</td>
 </tr>
 <tr>
  <td>00</td>
  <td>token_document_hash (empty)</td>
 </tr>
 <tr>
  <td>01</td>
  <td>Number of bytes (1 byte)</td>
 </tr>
 <tr>
  <td>00</td>
  <td>Number of decimals (0, therefore non-divisible)</td>
 </tr>
 <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>000000000000000a</td>
  <td>Number of coins: 10 Coins</td>
 </tr>
</table>

#### Fan-out Parent NFT SEND Transaction

This "SEND" transaction takes the Parent NTF genesis as its input, and outputs N number of child non-fungible tokens. This specific example outputs 10 non-fungible child tokens. The outputs of these tokens are to be used as the inputs of individual GENESIS transactions for each child token. The outputted tokens correspond to vout[1 to 10] in the transaction after the OP_RETURN (vout[0]) data.

SCRIPT: ``6a04534c500001810453454e4420025aab14154371b9c900afd8b629104d5c8b41f0bbf3146577cc26da09080e3f080000000000000001080000000000000001080000000000000001080000000000000001080000000000000001080000000000000001080000000000000001080000000000000001080000000000000001080000000000000001``

SCRIPT BROKEN DOWN:
<table>
 <tr>
  <td>6a</td>
  <td>OP_RETURN</td>
 </tr>
 <tr>
  <td>04</td>
  <td>Length of lokad_id field (4 bytes)</td>
 </tr>
 <tr>
  <td>534c5000</td>
  <td>Lokid_id: 'SLP\x00'</td>
 </tr>
 <tr>
  <td>01</td>
  <td>length of token_type (1 byte)</td>
 </tr>
 <tr>
  <td>81</td>
  <td>token_type (81)</td>
 </tr>
 <tr>
  <td>04</td>
  <td>length of transaction_type field (4 bytes)</td>
 </tr>
 <tr>
  <td>53454e44</td>
  <td>Transaction type: 'SEND'</td>
 </tr>
 <tr>
  <td>20</td>
  <td>length of parent transaction ID (32 bytes)</td>
 </tr>
 <tr>
  <td>
   025aab14154371b9c900afd8b629104d5c8b41f0bbf314657<br/>
   7cc26da09080e3f
  </td>
  <td>Parent (GENESIS) NFT transaction ID</td>
 </tr>
 <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
 <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
  <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
  <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
  <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
  <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
  <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
  <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
  <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
  <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>1 coin</td>
 </tr>
</table>

#### GENESIS Child NTF Token Transaction

This is the genesis of a single child non-fungible token. The vin for this transaction should include one of the vout from the "Fan-out Parent NFT SEND Transaction" in the example above. The vout[0] of this transaction should include OP_RETURN for script below, and the vout[1] will be the output of the child NFT itself. One of these transactions will occur for each of the 10 non-fungible tokens created in the fan-out process, therefore there would be a total of exactly 10 of these transactions as per this specific example.

SCRIPT (hex): ``6a04534c500001410747454e455349534c00076368696c6430314c004c0001004c00080000000000000001``

SCRIPT BROKEN DOWN:
<table>
 <tr>
  <td>6a</td>
  <td>OP_RETURN</td>
 </tr>  
 <tr>
  <td>04</td>
  <td>length of lokad_id field (4 bytes)</td>
 </tr>
 <tr>
  <td>534c5000</td>
  <td>Lokad_ID: 'SLP\x00'</td>
 </tr>
 <tr>
  <td>01</td>
  <td>length of token_type (1 byte)</td>
 </tr>
 <tr>
  <td>41</td>
  <td>token_type: 41 (NTF child token)</td>
 </tr>
 <tr>
  <td>07</td>
  <td>number of bytes in transaction_type (7 bytes)</td>
 </tr>
 <tr>
  <td>47454e45534953</td>
  <td>Transaction Type: 'GENESIS'</td>
 </tr>
 <tr>
  <td>4c</td>
  <td>OP_PUSH_DATA1</td>
 </tr>
 <tr>
  <td>00</td>
  <td>token_ticker (empty)</td>
 </tr>
 <tr>
  <td>07</td>
  <td>length of token_name (7 bytes)</td>
 </tr>
 <tr>
  <td>6368696c643031</td>
  <td>'child01'</td>
 </tr>
 <tr>
  <td>4c</td>
  <td>OP_PUSH_DATA1</td>
 </tr>
 <tr>
  <td>00</td>
  <td>token_document_url (empty)</td>
 </tr>
 <tr>
  <td>4c</td>
  <td>OP_PUSH_DATA1</td>
 </tr>
 <tr>
  <td>00</td>
  <td>token_document_hash (empty)</td>
 </tr>
 <tr>
  <td>01</td>
  <td>Number of bytes (1 byte)</td>
 </tr>
 <tr>
  <td>00</td>
  <td>Number of decimals (0, therefore non-divisible)</td>
 </tr>
 <tr>
  <td>4c</td>
  <td>OP_PUSH_DATA1</td>
 </tr>
 <tr>
  <td>00</td>
  <td>unknown empty value (more research required)</td>
 </tr>
 <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>Number of coins: 1 Coin</td>
 </tr>
</table>

#### SEND Child NTF Token Transaction

This is the OP_RETURN script to send a child NFT.

SCRIPT (hex): ``6a04534c500001410453454e44208bedb11c0852aec2781cf76c2b928ead655281df019f80c47701319d50bad02c080000000000000001``

SCRIPT BROKEN DOWN:
<table>
 <tr>
  <td>6a</td>
  <td>OP_RETURN</td>
 </tr>  
 <tr>
  <td>04</td>
  <td>length of lokad_id field (4 bytes)</td>
 </tr>
 <tr>
  <td>534c5000</td>
  <td>Lokad_ID: 'SLP\x00'</td>
 </tr>
 <tr>
  <td>01</td>
  <td>length of token_type (1 byte)</td>
 </tr>
 <tr>
  <td>41</td>
  <td>token_type: 41 (NTF child token)</td>
 </tr>
 <tr>
  <td>04</td>
  <td>number of bytes in transaction_type (4 bytes)</td>
 </tr>
 <tr>
  <td>53454e44</td>
  <td>Transaction Type: 'SEND'</td>
 </tr>
 <tr>
  <td>20</td>
  <td>length of transaction ID for child genesis</td>
 </tr>
 <tr>
  <td>8bedb11c0852aec2781cf76c2b928ead655281df019f80<br/>
  c47701319d50bad02c</td>
  <td>Child NTF GENESIS Transaction ID</td>
 </tr>
 <tr>
  <td>08</td>
  <td>Length of bytes for number of coins (OUTPUT)</td>
 </tr>
 <tr>
  <td>0000000000000001</td>
  <td>Number of coins: 1 Coin</td>
 </tr>
</table>