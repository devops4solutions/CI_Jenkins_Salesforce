public class AccountContactWrapper {

    	@AuraEnabled
    	public List<Account> accountRecords;
    	@AuraEnabled
    	public List<Contact> contactRecords;

    public AccountContactWrapper(List<Account> accountRecords, List<Contact> contactRecords){
        this.accountRecords = accountRecords;
        this.contactRecords = contactRecords;
    }
    
}