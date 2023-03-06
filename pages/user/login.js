import React, { useState, useContext } from 'react';
import { Flex, Card, Text, Title, Footer, Button } from "@tremor/react";


export default function Login() {
  const [selectedView, setSelectedView] = useState(1);
    return (
      <Card maxWidth="max-w-xs">
        <div>
          <Title>Login</Title>
          <Text>Digite seu e-mail e senha</Text>
          <div className="mb-3"></div>
          <div class="form-floating mb-3 border">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating border">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
        </div>
        <Footer>
          <Flex justifyContent="justify-end" spaceX="space-x-2">
            <Button
              size="sm"
              variant="primary"
              onClick={() => console.log("clicked")}>
              Login
            </Button>
          </Flex>
        </Footer>
    </Card>
    )
}
