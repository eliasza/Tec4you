import React, { useState, useContext } from 'react';
import { Flex, Card, Text, Title, Footer, Button, TextInput, Divider } from "@tremor/react";


export default function Login() {
  const [selectedView, setSelectedView] = useState(1);
    return (
      <Card maxWidth="max-w-xs">
        <div>
          <Title>Cadastre-se</Title>
          <Divider />
          <Text>Nome:</Text>
          <TextInput placeholder="" />
          <div className='mb-2'></div>
          <Text>E-mail:</Text>
          <TextInput placeholder="" type="email"/>
          <div className='mb-2'></div>
          <Text>Senha:</Text>
          <TextInput placeholder="" type="password"/>
          <div className='mb-2'></div>
          <Text>Confirmar Senha:</Text>
          <TextInput placeholder="" type="password" />
          <div className='mb-2'></div>
        </div>
        <Footer>
          <Flex justifyContent="justify-end" spaceX="space-x-2">
          <Button
              size="sm"
              variant="secondary"
              onClick={() => console.log("clicked")}>
              Cancelar
            </Button>
            <Button
              size="sm"
              variant="primary"
              onClick={() => console.log("clicked")}>
              Salvar
            </Button>
          </Flex>
        </Footer>
    </Card>
    )
}
