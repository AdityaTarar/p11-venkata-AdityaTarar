-- Create the CITIES table
CREATE TABLE CITIES (
    CITY CHAR(20) PRIMARY KEY,
    STATE CHAR(20)
);

-- Create the WAREHOUSES table
CREATE TABLE WAREHOUSES (
    WID INTEGER PRIMARY KEY,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    CITY CHAR(20),
    FOREIGN KEY (CITY) REFERENCES CITIES(CITY)
);

-- Create the STORES table
CREATE TABLE STORES (
    SID INTEGER PRIMARY KEY,
    STORE_NAME CHAR(20),
    LOCATION_CITY CHAR(20),
    FOREIGN KEY (LOCATION_CITY) REFERENCES CITIES(CITY)
);

-- Create the CUSTOMER table
CREATE TABLE CUSTOMER (
    CNO INTEGER PRIMARY KEY,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20),
    FOREIGN KEY (CU_CITY) REFERENCES CITIES(CITY)
);

-- Create the ORDERS table
CREATE TABLE ORDERS (
    ONO INT PRIMARY KEY,
    ODATE DATE,
    CUSTOMER_ID INTEGER,
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(CNO)
);

-- Create the ITEMS table
CREATE TABLE ITEMS (
    ITEMNO INTEGER PRIMARY KEY,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5,2)
);

-- Create the ORDERS_ITEMS junction table
CREATE TABLE ORDERS_ITEMS (
    ORDER_ID INT,
    ITEM_ID INT,
    ORDERED_QUANTITY INT,
    FOREIGN KEY (ORDER_ID) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEM_ID) REFERENCES ITEMS(ITEMNO)
);

-- Create the STORES_ITEMS junction table
CREATE TABLE STORES_ITEMS (
    STORE_ID INT,
    ITEM_ID INT,
    QUANTITY INT,
    FOREIGN KEY (STORE_ID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEM_ID) REFERENCES ITEMS(ITEMNO)
);
