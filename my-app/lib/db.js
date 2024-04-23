import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    //aqui viria a URL do Banco de Dados.
  );

  return client;
}
