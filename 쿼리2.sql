SELECT t1.*,t2.path,t3.category1,t3.category2,t3.category3 
FROM t_product t1, t_image t2, t_category t3
WHERE t1.id = t2.product_id AND t2.`type` = 1 AND t1.category_id = t3.id


SELECT t1.*,t2.path,t3.category1,t3.category2,t3.category3 
FROM t_product t1, t_image t2, t_category t3
WHERE t1.id = 1 AND t1.id = t2.product_id AND t2.type = 3 AND t1.category_id = t3.id


SELECT * FROM t_image WHERE product_id = 1 AND TYPE = 2


insert INTO t_product(product_name,product_price,delivery_price,add_delivery_price,tags,out_days,seller_id,category_id)
VALUES ("테스트제품AA",70000,2500,5000,"닭갈비,밀키트,삼계탕",5,1,1);





