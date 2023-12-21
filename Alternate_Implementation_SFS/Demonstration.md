# Demonstration->

- For the demonstration purpose, we will use `Event_factory` contract for interacting with the `Alternate_Fee_Sharing` contract.
-  1. **Pre-requistive**: Deploy the `Alternate_Fee_Sharing` and `Event_factory` contract.
- 2. **Registration to Alternate_SFS**: 
           
       * Go to  Event_factory contract and input all `recepients` and their respective `shares` along with its address as shown->
        
       
           ![Alt text](<Alternate_Photos/Registration_to_SFS/Screenshot from 2023-12-21 19-48-45.png>)

       * #### The contract will get registered to SFS and all recepients will get respective NFT , each tied to that contract ->####
             
        ![Alt text](<Alternate_Photos/Registration_to_SFS/Screenshot from 2023-12-21 21-13-48.png>)


- 3. **Fees Distribution**: 
         
       * Let us assume that `Off-Chain Component` decides to give `10000000 wei` to this registered contract.




       * Thus, the SFS contract will receive the money as shown->![Alt text](<Alternate_Photos/Distribution_Fees/Screenshot from 2023-12-21 19-59-51.png>)  

       * Now the crazy part lies here -> The received amount wil then be distributed to all the recipients (tokenId's) as per the share given while registering their contract as shown ->
       ![Alt text](<Alternate_Photos/Show_Balance_with_Shre/Screenshot from 2023-12-21 20-50-46.png>)
       
       (**As the recepient with tokenId =1 has the share 15% on the earnings from the Alternate_SFS contract -> Thus it has the balance of 150000 wei.**)


- 4. **Withdraw fees from Alternate_SFS**: 
       * For withdrawing earnings from it -> Input your tokenId + amount to be retrieved as shown->![Alt text](<Alternate_Photos/Withdraw_fees/Screenshot from 2023-12-21 21-06-07.png>)
        
       * Thus on transacting, the specified amount will get 
          deducted from the Alternate_SFS to `msg.sener` as shown->
           ![Alt text](<Alternate_Photos/Withdraw_fees/Screenshot from 2023-12-21 21-07-12.png>)

        * The given amount will be deducted from that tokenId in the Alternate_SFS as shown->  ![Alt text](<Alternate_Photos/Withdraw_fees/Screenshot from 2023-12-21 21-07-43.png>) 

  


         

