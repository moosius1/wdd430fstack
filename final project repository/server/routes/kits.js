var express = require('express');
var router = express.Router();

const sequenceGenerator = require('./sequenceGenerator');

const Kit = require('../models/kit');

router.get('/', (req, res, next) => {
    Kit.find()
    
    .exec(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        return res.status(200).json(result);
    });
});

router.post('/', (req, res, next) => {
    const maxDocumentId = sequenceGenerator.nextId("kits");

    const kit = new Kit({
        id: maxDocumentId,
        name: req.body.name,
        purchaseDate: req.body.purchaseDate,
        score: req.body.score,
        imageUrl: req.body.imageUrl,
        buildStatus: req.body.buildStatus
    });

    kit.save()
        .then(createdKit => {
            res.status(201).json({
                message: 'Kit added successfully',
                kit: createdKit
            });
        })
        .catch(error => {
            res.status(500).json({
            message: 'Error creating kit',
            error: error
            });
        });
});

router.put('/:id', (req, res, next) => {
    Kit.findOne({ id: req.params.id })
      .then(kit => {
        kit.name = req.body.name,
        kit.purchaseDate = req.body.purchaseDate,
        kit.score = req.body.score,
        kit.imageUrl =req.body.imageUrl,
        kit.buildStatus = req.body.buildStatus,
  
        kit.updateOne({ id: req.params.id }, kit)
          .then(result => {
            res.status(204).json({
              message: 'Kit updated successfully'
            })
          })
          .catch(error => {
             res.status(500).json({
             message: 'An error occurred while updating kit',
             error: error
           });
          });
      })
      .catch(error => {
        res.status(500).json({
          message: 'Kit not found.',
          error: { kit: 'Kit not found'}
        });
      });
});

router.delete("/:id", (req, res, next) => {
    Kit.findOne({ id: req.params.id })
      .then(kit => {
        kit.deleteOne({ id: req.params.id })
          .then(result => {
            res.status(204).json({
              message: "Kit deleted successfully"
            });
          })
          .catch(error => {
             res.status(500).json({
             message: 'An error occurred while deleting kit',
             error: error
           });
          })
      })
      .catch(error => {
        res.status(500).json({
          message: 'Kit not found.',
          error: { kit: 'kit not found'}
        });
      });
  });


module.exports = router;