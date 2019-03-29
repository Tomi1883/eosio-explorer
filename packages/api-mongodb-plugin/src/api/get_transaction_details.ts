import TransactionTracesModel from '../models/transaction_traces';

export default async (query:any) => {
  try{
    let { id } = query;

    let result: object;

    let query_gen = TransactionTracesModel
      .find({});

    console.log("trx id is ", id);
    if(id === undefined || id.trim() === ""){
      throw("invalid transaction id");
    } 
    else {
      query_gen.where({id: id});
    }

    query_gen.limit(100);
    query_gen.sort({createdAt: -1});
    result = await query_gen.exec();

    return result;
  }catch(err){
    console.log(err);
    throw(err);
  }
}