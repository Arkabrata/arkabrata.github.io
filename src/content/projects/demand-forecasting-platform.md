---
title: "Demand Forecasting Platform"
description: "A production forecasting engine serving 50,000+ SKUs across 300+ stores, improving forecast accuracy by 23%."
order: 1
tags: ["Time Series Forecasting", "LightGBM", "GCP", "Supply Chain"]
repo: "#"
---

## Problem
A ₹1,000 Cr omnichannel retail business needed reliable demand forecasts across 50,000+ SKUs and 300+ stores to drive inventory planning, replenishment, and allocation — at a scale where manual planning and spreadsheet forecasting break down.

## Method
The platform ensembles gradient-boosted models (LightGBM, XGBoost) with classical time series methods (ARIMA, Prophet), built on engineered features covering seasonality, promotions, store attributes, and sell-through behavior. Store- and SKU-clustering models group similar demand patterns to improve forecasts for sparse and new items.

## System / Workflow
Data flows from ERP, POS, and marketplace systems into a BigQuery feature foundation via automated Cloud Functions and Pub/Sub pipelines. A scheduled inference pipeline on GCP retrains and scores models, publishing SKU-store level forecasts that feed downstream replenishment, transfer, and allocation systems.

## Impact
The platform improved forecast accuracy by 23% and, combined with the replenishment engine it feeds, contributed to a 35% reduction in inventory aging across the network.

## Future Research Direction
Future work includes transformer-based and global forecasting models, probabilistic forecasts for uncertainty-aware planning, and tighter causal handling of promotions and price changes.
