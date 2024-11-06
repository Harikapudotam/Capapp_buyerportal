using {harika.ust} from '../db/model';
using {OP_API_PRODUCT_SRV_0001 as prod_api} from '../srv/external/OP_API_PRODUCT_SRV_0001';

service MyService{
    
    entity Status as projection on ust.Status;
     @odata.draft.enabled : true
    entity Request_Header as projection on ust.RequestHeader;

    entity Request_Items as projection on ust.RequestItem;
    entity matnew as projection on ust.mat;
    entity materials as projection on ust.Material;


}