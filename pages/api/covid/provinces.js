''
import dbConnect from '../../../lib/dbConnect'
import Provinces from '../../../models/provinces'
import axios from "axios";

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const options = {
          method: 'GET',
          url: 'https://covid-19-statistics.p.rapidapi.com/provinces',
          params: {iso: 'CHN'},
          headers: {
            'X-RapidAPI-Key': '10bfed42bamshc0abf00a81357e6p114a7ejsn57bd3a4b6f7f',
            'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
          }
        };
        await axios.request(options).then(function (response) {
          console.log(response.data);
          res.status(200).json({ success: true, data: response.data.data })
        }).catch(function (error) {
          console.error(error);
        });
        
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const provinces = await Provinces.create(req.body)
        res.status(201).json({ success: true, data: provinces })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

  