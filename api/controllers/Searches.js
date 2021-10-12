const mongoose = require('mongoose');

const Searches =require('../models/Searches')

module.exports = {  

    POST: { startDate : 1602227005000, endDate: 1602313340000 } ,

    creatSearch: (req, res) => {
        const { createdAt,customerId} = req.body;

        const serches = new Searches({
            
            createdAt,
            customerId,
            invoiceId
        });

        serches.save().then(() => {
            serches.status(200).json({
                message: 'Creaete search'
            })
        }).catch(error => {
            res.status(500).json({
                error
            })

        });
    },
    getSearches: (req, res) => {

        Searches.find({$and:[ {createdAt:{$gt:this.POST.startDate}}, {createdAt:{$lt:this.POST.endDate}} ]}) .then((serches) => {
            console.log('hh',serches);
            res.status(200).json({
                serches
            })
        }).catch(error => {
            res.status(500).json({
                error
            })
        });
    } 
}
