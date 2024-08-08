package com.robotrader.spring.repository;

import com.robotrader.spring.model.Ticker;
import com.robotrader.spring.model.enums.TickerTypeEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TickerRepository extends JpaRepository<Ticker, Long> {
    Ticker findByTickerName(String tickerName);

    @Query("SELECT t FROM Ticker t WHERE t.tickerType = :tickerType")
    List<Ticker> findByTickerType(@Param("tickerType") TickerTypeEnum tickerType);
}
