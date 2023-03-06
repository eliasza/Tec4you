import React, { useState, useContext } from 'react';

import {
  AreaChart,
    Block,
    BadgeDelta,
    Card,
    ColGrid,
    Icon,
    Tab,
    TabList,
    Text,
    Title,
    Flex,
    Metric,
    ProgressBar,
    Toggle,
    ToggleItem
} from '@tremor/react';

export const performance = [
  {
      date: '2021-01-01', Sales: 900.73, Profit: 173, Customers: 73,
  },
  {
      date: '2021-01-02', Sales: 1000.74, Profit: 174.6, Customers: 74,
  },
  // ...
  {
      date: '2021-03-13', Sales: 882, Profit: 682, Customers: 682,
  },
];

const kpiData = [
  {
      title: 'Sales',
      metric: '$ 12,699',
      progress: 15.9,
      target: '$ 80,000',
      delta: '13.2%',
      deltaType: 'moderateIncrease',
  },
  {
      title: 'Profit',
      metric: '$ 45,564',
      progress: 36.5,
      target: '$ 125,000',
      delta: '23.9%',
      deltaType: 'increase',
  },
  {
      title: 'Customers',
      metric: '1,072',
      progress: 53.6,
      target: '2,000',
      delta: '10.1%',
      deltaType: 'moderateDecrease',
  },
];

export default function Home() {
  const [selectedView, setSelectedView] = useState(1);
  const [selectedKpi, setSelectedKpi] = useState('Sales');

  return (
    <main className="bg-slate-50 p-6 sm:p-10">
          <Title>Dashboard</Title>
          <Text>
              Análise de dados da <b>Covid 19</b>
          </Text>

          <TabList defaultValue={ 1 } onValueChange={ (value) => setSelectedView(value) } marginTop="mt-6">
              <Tab value={ 1 } text="Overview" />
              <Tab value={ 2 } text="Detail" />
          </TabList>

          { selectedView === 1 ? (
              <>
                  <ColGrid numColsMd={ 2 } numColsLg={ 3 } marginTop="mt-6" gapX="gap-x-6" gapY="gap-y-6">
                      { kpiData.map((item) => (
                          <Card key={ item.title }>
                              <Flex alignItems="items-start">
                                  <Block truncate={ true }>
                                      <Text>{ item.title }</Text>
                                      <Metric truncate={ true }>{ item.metric }</Metric>
                                  </Block>
                                  <BadgeDelta deltaType={ item.deltaType } text={ item.delta } />
                              </Flex>
                              <Flex marginTop="mt-4" spaceX="space-x-2">
                                  <Text truncate={ true }>{ `${item.progress}% (${item.metric})` }</Text>
                                  <Text>{ item.target }</Text>
                              </Flex>
                              <ProgressBar percentageValue={ item.progress } marginTop="mt-2" />
                          </Card>
                      )) }
                  </ColGrid>

                  <Block marginTop="mt-6">
                    <Card>
                      <div className="md:flex justify-between">
                          <Block>
                              <Flex justifyContent="justify-start" spaceX="space-x-0.5" alignItems="items-center">
                                  <Title> Performance History </Title>
                                  
                              </Flex>
                              <Text> Daily increase or decrease per domain </Text>
                          </Block>
                          <div className="mt-6 md:mt-0">
                              <Toggle
                                  color="zinc"
                                  defaultValue={ selectedKpi }
                                  onValueChange={ (value) => setSelectedKpi(value) }
                              >
                                  <ToggleItem value="Sales" text="Sales" />
                                  <ToggleItem value="Profit" text="Profit" />
                                  <ToggleItem value="Customers" text="Customers" />
                              </Toggle>
                          </div>
                      </div>
                      <AreaChart
                          data={ performance }
                          dataKey="date"
                          categories={ [selectedKpi] }
                          colors={ ['blue'] }
                          showLegend={ false }
                          yAxisWidth="w-14"
                          height="h-96"
                          marginTop="mt-8"
                      />
                  </Card>
                  </Block>
              </>
          ) : (
              <Block marginTop="mt-6">
                  <Card>
                      <div className="h-96" />
                  </Card>
              </Block>
          ) }
    </main>
  );
}
