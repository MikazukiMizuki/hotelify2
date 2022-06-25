import { useUser } from "@auth0/nextjs-auth0";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

const History = () => {
  const [transaction, setTransaction] = useState<Transaction[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const user = useUser();
  const userId = user.user?.sub;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/transaction/getTransaction`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
      method: "POST",
    })
      .then((res) => res.json())
      .then((transaction) => {
        setTransaction(transaction);
        setLoading(false);
      });
  }, []);

  interface Transaction {
    transactionId: number;
    roomId: number;
    createdAt: String;
    status: String;
  }

  if (isLoading) {
    return (
      <>
        <Card>
          <Container>
            <div>Loading...</div>
          </Container>
        </Card>
      </>
    );
  }

  return (
    <Container className="my-lg-4 text-white">
      {transaction?.map((transaction: Transaction) => (
        <Card className="bg-dark my-lg-2">
          <div>
            <React.Fragment key={transaction.transactionId}>
              <>
                <Card.Title className="text-center border-white border-bottom">
                  Transaction ID: {transaction.transactionId}
                </Card.Title>
                <Card.Body>
                  <p>Booking for Room ID: {transaction.roomId}</p>
                  <p>Booking at: {transaction.createdAt.slice(0, 10)}</p>
                  <p>Status: {transaction.status}</p>
                </Card.Body>
              </>
            </React.Fragment>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default History;
