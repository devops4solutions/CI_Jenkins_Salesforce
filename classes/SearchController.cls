public class SearchController {
    @AuraEnabled
    public static list<object> searchRecords(String searchString){
        List<object> recordList = new List<object> ();
        searchString = '%'+searchString+'%';
        List<Account> accountList = [SELECT Id, Name, Phone, Website FROM Account WHERE Name like : searchString];
        List<Contact> contactList = [SELECT Id, Name, Phone, Email, CreatedDate FROM Contact WHERE Name like : searchString];
        recordList.add(accountList);
        recordList.add(contactList);
        return recordList;
    }
    
    @AuraEnabled
    public static AccountContactWrapper searchRecordsWithWrapper(String searchString){
        searchString = '%'+searchString+'%';
        List<Account> accountList = [SELECT Id, Name, Phone, Website FROM Account WHERE Name like : searchString];
        List<Contact> contactList = [SELECT Id, Name, Phone, Email FROM Contact WHERE Name like : searchString];
        AccountContactWrapper wrapper = new AccountContactWrapper(accountList, contactList);
        return wrapper;
    }
}